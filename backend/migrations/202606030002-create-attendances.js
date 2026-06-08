'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Attendances', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            clock_in: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            clock_out: {
                type: Sequelize.DATE,
                allowNull: true,
            },

            date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },

            status: {
                type: Sequelize.ENUM(
                    'present',
                    'absent',
                    'late',
                    'half_day'
                ),
                defaultValue: 'present',
            },

            hours_worked: {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: true,
                defaultValue: 0,
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
        await queryInterface.dropTable('Attendances');
    },
};