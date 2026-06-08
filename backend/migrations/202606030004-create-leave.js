'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Leaves', {
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

            leave_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'LeaveTypes',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
            },

            start_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },

            end_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },

            total_days: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            reason: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            status: {
                type: Sequelize.ENUM('pending', 'approved', 'rejected'),
                defaultValue: 'pending',
            },

            approved_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Employees',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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
        await queryInterface.dropTable('Leaves');

        // important for MySQL ENUM cleanup
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Leaves_status";');
    },
};