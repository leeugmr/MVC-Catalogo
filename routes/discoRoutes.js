const express = require('express');
const router = express.Router();
const DiscoController = require('../controllers/discoController');

router.get('/', DiscoController.listar);

router.get('/cadastrar', (req, res) => {
  res.render('discos/form');
});

router.post('/cadastrar', DiscoController.criar);

router.get('/editar/:id', DiscoController.exibirEdicao);

router.post('/editar/:id', DiscoController.editar);

router.post('/remover/:id', DiscoController.remover);

module.exports = router;
