const { Disco, Artista } = require('../models');

const listar = async (req, res) => {
  try {
    const discos = await Disco.findAll({
      include: {
        model: Artista,
        as: 'artista',
      },
    });
    res.render('discos/index', { discos });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao listar discos.');
  }
};

const exibirEdicao = async (req, res) => {
  try {
    const disco = await Disco.findByPk(req.params.id);
    if (!disco) {
      return res.status(404).send('Disco não encontrado.');
    }
    res.render('discos/edit', { disco });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar disco para edição.');
  }
};


const criar = async (req, res) => {
  const { nome, ano_lancamento, capa, faixas, artista_id } = req.body;
  try {
    const novoDisco = await Disco.create({
      nome,
      ano_lancamento,
      capa,
      faixas: faixas ? faixas.split(',') : [], 
      artista_id,
    });
    res.redirect('/discos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar disco.');
  }
};

const editar = async (req, res) => {
  const { nome, ano_lancamento, capa, faixas, artista_id } = req.body;
  try {
    const disco = await Disco.findByPk(req.params.id);
    if (!disco) {
      return res.status(404).send('Disco não encontrado.');
    }
    await disco.update({
      nome,
      ano_lancamento,
      capa,
      faixas: faixas ? faixas.split(',') : [],
      artista_id,
    });
    res.redirect('/discos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao editar disco.');
  }
};

const remover = async (req, res) => {
  try {
    const disco = await Disco.findByPk(req.params.id);
    if (!disco) {
      return res.status(404).send('Disco não encontrado.');
    }
    await disco.destroy();
    res.redirect('/discos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao remover disco.');
  }
};

module.exports = { listar, criar, exibirEdicao, editar, remover };
