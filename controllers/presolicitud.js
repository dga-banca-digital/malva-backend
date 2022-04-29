const model = require('../models/formulario0')


// Obtener DATA de presolicitud
exports.getData = (req, res) => {
    model.find({},(error, docs) => {
        res.send({
            docs
        })
    })
};


// Insertar DATA de presolicitud
exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if(err){
            console.log(err)
        }
        res.send( { data: docs })
    })
};