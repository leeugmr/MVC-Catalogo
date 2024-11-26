module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Discos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      artista_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'artistas',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Discos');
  },
};
