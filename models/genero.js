const { Model, DataTypes } = require('sequelize');

class Genero extends Model {
  static init(sequelize) {
    return super.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Genero',
        tableName: 'generos',
        timestamps: true,
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Disco, {
      through: 'DiscoGenero',
      as: 'discos',
      foreignKey: 'genero_id',
    });
  }
}

module.exports = Genero;
