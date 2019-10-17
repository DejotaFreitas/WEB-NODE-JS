'use stric'

const mongoose = require('mongoose');

module.exports = mongoose.model('Usuario', mongoose.Schema({
  login: { type: String, required: true, trim: true },
  senha: { type: String, required: true, trim: true }
}));
