const { Op } = require('sequelize');
const { Employee, Department } = require('../model');
const { AppError } = require('../utils/errorHandler');
const { parsePaginationParams, buildPaginationMeta } = require('../utils/pagination');
const { sendAccountDeactivatedEmail } = require('./emailService');

const getAllEmployees = async(query) => {
    const { limit, offset, page } = parsePaginationParams(query);
    const { search } = query;

    const whereClause = search ? {
        [Op.or]: [{
                first_name: {
                    [Op.like]: `%${search}%`
                }
            },
            {
                last_name: {
                    [Op.like]: `%${search}%`
                }
            },
            {
                email: {
                    [Op.like]: `%${search}%`
                }
            },
            {
                position: {
                    [Op.like]: `%${search}%`
                }
            },
        ]
    } : {};

    const { count, rows } = await Employee.findAndCountAll({
        where: whereClause,
        attributes: { exclude: ['password', 'google_id'] },
        include: [{
            model: Department,
            as: 'department',
            attributes: ['id', 'name']
        }],
        limit,
        offset,
    });

    return {
        data: rows,
        meta: buildPaginationMeta(count, page, limit),
    };
};

const getEmployeeById = async(id) => {
    const employee = await Employee.findByPk(id, {
        attributes: { exclude: ['password', 'google_id'] },
        include: [{
            model: Department,
            as: 'department',
            attributes: ['id', 'name']
        }]
    });
    if (!employee) throw new AppError('Employee not found', 404);
    return employee;
};

const updateEmployee = async(id, data) => {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new AppError('Employee not found', 404);

    const updateData = {};
    if (data.first_name !== undefined) updateData.first_name = data.first_name;
    if (data.last_name !== undefined) updateData.last_name = data.last_name;
    if (data.phone !== undefined) updateData.phone = data.phone;
    if (data.position !== undefined) updateData.position = data.position;
    if (data.hire_date !== undefined) updateData.hire_date = data.hire_date;
    if (data.basic_salary !== undefined) updateData.basic_salary = data.basic_salary;
    if (data.department_id !== undefined) {
        const department = await Department.findByPk(data.department_id);
        if (!department) {
            throw new AppError('Department not found', 404);
        }
        updateData.department_id = data.department_id;
    }

    await employee.update(updateData);

    const updatedEmployee = await Employee.findByPk(id, {
        attributes: { exclude: ['password', 'google_id'] },
        include: [{
            model: Department,
            as: 'department',
            attributes: ['id', 'name']
        }]
    });
    return updatedEmployee;
};

const deleteEmployee = async(id) => {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new AppError('Employee not found', 404);
    await employee.destroy();
    return { message: 'Employee deleted successfully' };
};

const deactivateEmployee = async(id) => {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new AppError('Employee not found', 404);

    employee.is_active = false;
    await employee.save();

    try {
        await sendAccountDeactivatedEmail(employee);
    } catch (err) {
        console.error('Email failed:', err.message);
    }

    const { password, google_id, ...employeeData } = employee.toJSON();
    return employeeData;
};

const activateEmployee = async(id) => {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new AppError('Employee not found', 404);

    employee.is_active = true;
    await employee.save();

    const { password, google_id, ...employeeData } = employee.toJSON();
    return employeeData;
};

const changeRole = async(id, role) => {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new AppError('Employee not found', 404);

    employee.role = role;
    await employee.save();

    const { password, google_id, ...employeeData } = employee.toJSON();
    return employeeData;
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    deactivateEmployee,
    activateEmployee,
    changeRole,
};