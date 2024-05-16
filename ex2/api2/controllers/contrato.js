const Contrato = require('../models/contrato')

module.exports.list = async () => {
    return await Contrato.find().exec()
}

module.exports.findById = id => {
    return Contrato.findOne({idcontrato : id}).exec()
}

module.exports.findByEntidade = entidade => {
    return Contrato.findOne({entidade_comunicante : entidade}).exec()
}

module.exports.findByTipo = tipo => {
    return Contrato.findOne({tipoprocedimento : tipo}).exec()
}

module.exports.listEntidades = async () => {
    const entidades = await Contrato.distinct('entidade_comunicante')
    console.log('Entidades:', entidades);
    return entidades.sort()
}

module.exports.listTipos = async () => {
    const tipos = await Contrato.distinct('tipoprocedimento')
    console.log('Entidades:', tipos);
    return tipos.sort()
}

module.exports.insert = contrato => {
    if((Contrato.find({idcontrato : contrato.idcontrato}).exec()).length != 1){
        var newContrato = new Contrato(contrato)
        return newContrato.save()
    }
}

module.exports.removeById = id => {
    return Contrato.findOneAndDelete({idcontrato : id})
}

module.exports.update = (id, contrato) => {
    const oldContrato = Contrato.findOne({idcontrato : id}).exec()
    return Contrato.findByIdAndUpdate(oldContrato._id, contrato, {new: true})
}

module.exports.findByNIPC = nipc => {
    return Contrato.find({NIPC_entidade_comunicante : nipc}).exec()
}