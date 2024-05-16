var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

router.get('/', function(req, res) {
  Contrato.list()
  .then(data => res.render('index', {contratos : data}))
            .catch(erro => res.jsonp(erro))
})

router.get('/:id', function(req, res) {
  Contrato.findById(req.params.id)
          .then(data => res.render('contrato', {contrato : data}))
          .catch(erro => res.jsonp(erro))
});

router.get('/entidades/:nipc', function(req, res) {
  Contrato.findByNIPC(req.params.nipc)
          .then(data => {
            var valor = 0
            data.forEach(c => valor += parseFloat(c.precoContratual))
            res.render('entidade', {contratos : data, valor : valor})
})
          .catch(erro => res.jsonp(erro))
});

module.exports = router;
