'use stric'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// modulo mvc
const app = express();
const router = express.Router();

// conexao com banco de dados
mongoose.connect('mongodb://localhost:27017/dejota_mongo_db', {useNewUrlParser:true});

// modelos do banco de dados
const produtoModel = require('./model/produtoModel');
const usuarioModel = require('./model/produtoModel');

// mportar as rotas
const indexRoute = require('./routes/indexRoute');
const produtoRoute = require('./routes/produtoRoute');

// converter corpo da requisicao em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// adicionar as rotas
app.use('/', indexRoute);
app.use('/produto', produtoRoute);

module.exports = app;
