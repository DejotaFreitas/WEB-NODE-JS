'use stric'

const mongoose = require('mongoose');

module.exports = mongoose.model('Produto', mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  valor: { type: Number, required: true },
  ativo: { type: Boolean,  required: true, default: true }
}));


//  tipo: { type: String, required: true, enum: ['user, 'admin], default:'user' }
//  data: { type: Date, required: true, default: Date.now }
//   url_id: { type: String, required: true, trim: true, index: true, unique: true },
//   lista_tags: [{ type: String, required: true }]

//   usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
//   lista_usuarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }]

// lista_itens: [{
//   nome: { type: String, required: true },
//   quantidade: { type: Number, required: true, default: 1 }
// }]
