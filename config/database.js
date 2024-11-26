const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('catalogo_discos', 'postgres', 'admin', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
