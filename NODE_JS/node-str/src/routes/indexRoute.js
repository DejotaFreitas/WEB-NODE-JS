'use stric'

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Dejota NodeJS API",
    version: "0.0.1",
    descricao: " API desenvolvida por dejota com intuito de aprender NodeJS."
  });
});

module.exports = router;
