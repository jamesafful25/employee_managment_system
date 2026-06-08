'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Performances', {
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

            reviewed_by: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
            },

            rating: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            goals: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            comments: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            review_date: {
                type: Sequelize.DATEONLY,
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
        await queryInterface.dropTable('Performances');
    },
};