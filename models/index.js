const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Artista = require('./artista');
const Disco = require('./disco');
const Genero = require('./genero');

const models = {
  Artista: Artista.init(sequelize),
  Disco: Disco.init(sequelize),
  Genero: Genero.init(sequelize),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, ...models };
