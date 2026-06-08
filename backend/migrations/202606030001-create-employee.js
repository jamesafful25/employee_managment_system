'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Employees', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },

            google_id: {
                type: Sequelize.STRING
            },

            first_name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            last_name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            password: {
                type: Sequelize.STRING
            },

            phone: {
                type: Sequelize.STRING
            },

            position: {
                type: Sequelize.STRING
            },

            role: {
                type: Sequelize.ENUM('admin', 'hr', 'manager', 'employee'),
                defaultValue: 'employee'
            },

            is_active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },

            hire_date: {
                type: Sequelize.DATE
            },

            basic_salary: {
                type: Sequelize.DECIMAL(10, 2),
                defaultValue: 0.00
            },

            department_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Departments',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },

            is_password_changed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },

            reset_password_token: {
                type: Sequelize.STRING
            },

            reset_password_expires: {
                type: Sequelize.DATE
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal(
                    'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
                )
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Employees');
    }
};