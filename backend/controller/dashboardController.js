const { getEmployeeDashboard, getAdminDashboard } = require('../service/dashboardService');

const getDashboard = async(req, res, next) => {
    try {
        const employeeId = req.employee.id;
        const role = req.employee.role;

        // Always fetch employee data (leave balance, recent leaves, clock status)
        const employeeData = await getEmployeeDashboard(employeeId);

        // Fetch admin stats only for admin/hr
        let adminData = null;
        if (role === 'admin' || role === 'hr') {
            adminData = await getAdminDashboard();
        }

        res.json({
            status: 'success',
            data: {
                ...employeeData,
                ...(adminData || {}),
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getDashboard };