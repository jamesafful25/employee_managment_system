'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('token_blacklist', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            token: {
                type: Sequelize.TEXT,
                allowNull: false,
            },

            expires_at: {
                type: Sequelize.DATE,
                allowNull: false,
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
        await queryInterface.dropTable('token_blacklist');
    },
};