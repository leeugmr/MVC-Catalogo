const { Artista } = require('../models');

const listar = async (req, res) => {
  try {
    const artistas = await Artista.findAll();
    res.render('artistas/index', { artistas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao listar artistas.');
  }
};

const criar = async (req, res) => {
  const { nome, nacionalidade, genero_musical } = req.body;
  try {
    await Artista.create({
      nome,
      nacionalidade,
      genero_musical,
    });
    res.redirect('/artistas');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar artista.');
  }
};

module.exports = { listar, criar };
