'use stric'

const Produto = require('mongoose').model('Produto');

exports.get = async() => {
  const res = await Produto.find({ ativo: true }, 'nome valor');
  return res;
}

exports.getId = async(id) => {
  const res = await Produto.findOne({ _id: id });
  return res;
}

exports.post = async(body) => {
  var produto = new Produto(body);
  const res = await produto.save();
  return res;
}

exports.put = async(id, body) => {
  const res = await Produto.findByIdAndUpdate(id, body);
  return res;
}

exports.delete = async(id) => {
  const res = await Produto.findByIdAndRemove(id);
  return res;
}
