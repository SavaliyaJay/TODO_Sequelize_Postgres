const {Sequelize} = require('sequelize');
const {sequelize} = require('../config/db');

const STATUS = {
    INACTIVE: 'inactive',
    ACTIVE: 'active',
};

const Crud = sequelize.define('crud', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
    },
    task: {
        type: Sequelize.STRING,
        field: 'task',
    },
    status: {
        type: Sequelize.ENUM(STATUS.INACTIVE, STATUS.ACTIVE),
        field: 'status',
        defaultValue: STATUS.ACTIVE,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Crud;