'use stric'

const express = require('express');
const router = express.Router();

const produtoController = require('./../controllers/produtoController');

router.get('/', produtoController.get);
router.get('/:id', produtoController.getId);
router.post('/', produtoController.post);
router.put('/:id', produtoController.put);
router.delete('/:id', produtoController.delete);

module.exports = router;
