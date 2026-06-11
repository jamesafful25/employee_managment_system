const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LeaveType = sequelize.define('LeaveType', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    max_days: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: 'leavetypes',
    freezeTableName: true,
    timestamps: false
});

module.exports = LeaveType;