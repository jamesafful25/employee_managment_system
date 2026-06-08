'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Files', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            file_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            file_path: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            file_type: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            file_size: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            uploaded_by: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },

            original_name: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Files');
    },
};