// routes.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/teste', (req, res) => {
    res.send(`Full name is:${req.body.nome}.`);
    var nome = req.body.nome;
    var sexo = req.body.sexo;
    var email = req.body.usermail;
    var pass = req.body.password;

    console.log(nome);
    console.log(sexo);
    console.log(email);
    console.log(pass);
  });

module.exports = app;