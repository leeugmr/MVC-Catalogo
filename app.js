const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));


const artistaRoutes = require('./routes/artistaRoutes');
const discoRoutes = require('./routes/discoRoutes');

app.use('/artistas', artistaRoutes);
app.use('/discos', discoRoutes);

app.get('/', (req, res) => {
  res.render('index'); 
});

app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
