const express = require('express');
const router = express.Router();
const ArtistaController = require('../controllers/artistaController');

router.get('/', ArtistaController.listar);

router.get('/cadastrar', (req, res) => {
  res.render('artistas/form');
});

router.post('/cadastrar', ArtistaController.criar);

module.exports = router;
