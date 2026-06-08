'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('LeaveTypes', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },

            max_days: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('LeaveTypes');
    },
};