// server.js
const path = require('path');
const express = require('express');
const layout = require('express-layout');

const routes = require('./routes');
const app = express();

var cons = require('consolidate');

//app.set('views', path.join(__dirname, 'static'));
//app.set('view engine', 'html');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'static'));
app.set('view engine', 'html');
/*
const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
];
app.use(middlewares);
*/
app.use('/', routes);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('App running at http://localhost:8080');
});