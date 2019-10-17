'use stric'

const produtoRepository = require('./../repository/produtoRepository')

exports.get = async(req, res, next) => {
  try {
    var data = await produtoRepository.get();
    res.status(200).send({ resposta: 'Listar de todos os produtos', produto: data });
  } catch (e) {
    res.status(500).send({ resposta: 'Error ao listar produto', error: e });
  }
}

exports.getId = async(req, res, next) => {
  try {
    var data = await produtoRepository.getId(req.params.id);
    res.status(200).send({ resposta: 'Produto buscado com sucesso', produto: data });
  } catch (e) {
    res.status(500).send({ resposta: 'Error ao tentar buscar produto', error: e });
  }
}

exports.post = async(req, res, next) => {
  try {
    var data = await produtoRepository.post(req.body);
    res.status(201).send({ resposta: 'Produto salvo com sucesso', produto: data });
  } catch (e) {
    res.status(500).send({ resposta: 'Error ao salvar produto', error: e });
  }
}

exports.put = async(req, res, next) => {
  try {
    var data = await produtoRepository.put(req.params.id, req.body);
    res.status(200).send({ resposta: 'Produto alterado com sucesso', produto: data });
  } catch (e) {
    res.status(500).send({ resposta: 'Error ao tentar alterar produto', error: e });
  }
}

exports.delete = async(req, res, next) => {
  try {
    var data = await produtoRepository.delete(req.params.id);
    res.status(200).send({ resposta: 'Produto deletado com sucesso', produto: data });
  } catch (e) {
    res.status(500).send({ resposta: 'Error ao tentar deletar produto', error: e });
  }
}
