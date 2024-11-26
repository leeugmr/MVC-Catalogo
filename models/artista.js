const { Model, DataTypes } = require('sequelize');

class Artista extends Model {
  static init(sequelize) {
    return super.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        genero_musical: {
          type: DataTypes.STRING, 
        },
        nacionalidade: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: 'Artista',
        tableName: 'artistas',
        timestamps: true,
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Disco, { foreignKey: 'artista_id', as: 'discos' });
  }
}

module.exports = Artista;
