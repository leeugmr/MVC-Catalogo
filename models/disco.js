const { Model, DataTypes } = require('sequelize');

class Disco extends Model {
  static init(sequelize) {
    return super.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ano_lancamento: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        capa: {
          type: DataTypes.STRING, 
        },
        faixas: {
          type: DataTypes.ARRAY(DataTypes.STRING),
        },
        artista_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Disco',
        tableName: 'discos',
        timestamps: true,
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Artista, {
      foreignKey: 'artista_id',
      as: 'artista',
    });
    this.belongsToMany(models.Genero, {
      through: 'DiscoGenero',
      as: 'generos',
      foreignKey: 'disco_id',
    });
  }
}

module.exports = Disco;
