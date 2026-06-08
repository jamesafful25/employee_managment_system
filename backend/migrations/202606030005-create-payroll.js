'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Payrolls', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },

            month: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            year: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            basic_salary: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },

            bonus: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0,
            },

            deductions: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0,
            },

            tax_rate: {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: 0,
            },

            tax_amount: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0,
            },

            tax_method: {
                type: Sequelize.ENUM('basic', 'gross'),
                allowNull: false,
                defaultValue: 'basic',
            },

            net_salary: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },

            status: {
                type: Sequelize.ENUM('pending', 'paid'),
                allowNull: false,
                defaultValue: 'pending',
            },

            paid_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('Payrolls');
    },
};