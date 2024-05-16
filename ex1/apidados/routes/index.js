var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

router.get('/contratos', function(req, res) {
  const tipo = req.query.tipo
  const entidade = req.query.entidade

  if (tipo){
    Contrato.findByTipo(tipo)
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
  } 
  else if (entidade) {
    Contrato.findByEntidade(entidade)
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
  } 
  else {
    Contrato.list()
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
  }
});

router.get('/contratos/:id', function(req, res) {
  Contrato.findById(req.params.id)
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
});

router.get('/contratos/entidades', function(req, res) {
  console.log("ASDASD")
  Contrato.listEntidades()
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
});

router.get('/contratos/tipos', function(req, res) {
  Contrato.listTipos()
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
});

router.post('/contratos', function(req, res) {
  const newContrato = {
    idcontrato: req.body.idcontrato,
    nAnuncio: req.body.nAnuncio,
    tipoprocedimento: req.body.tipoprocedimento,
    objectoContrato: req.body.objectoContrato,
    dataPublicacao: req.body.dataPublicacao,
    dataCelebracaoContrato: req.body.dataCelebracaoContrato,
    precoContratual: req.body.precoContratual,
    prazoExecucao: req.body.prazoExecucao,
    NIPC_entidade_comunicante: req.body.NIPC_entidade_comunicante,
    entidade_comunicante: req.body.entidade_comunicante,
    fundamentacao: req.body.fundamentacao
  }
  Contrato.insert(newContrato)
          .then(data => res.status(201).jsonp(data))
          .catch(erro => res.status(400).jsonp(erro))
});

router.delete('/contratos/:id', function(req, res) {
  Contrato.removeById(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
})

router.put('/contratos/:id', function(req, res) {
  const newContrato = {};
  const fields = [
    "idcontrato",
    "nAnuncio",
    "tipoprocedimento",
    "objectoContrato",
    "dataPublicacao",
    "dataCelebracaoContrato",
    "precoContratual",
    "prazoExecucao",
    "NIPC_entidade_comunicante",
    "entidade_comunicante",
    "fundamentacao"
  ];

  fields.forEach(field => {
    if (req.body[field]) {
      newContrato[field] = req.body[field];
    }
  });
  Contrato.update(req.params.id, newContrato)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
})

module.exports = router;
