const {Schema, model} = require('mongoose');

const PresolicitudSchema = Schema({
    rfc_empresa: {type: String, requied: true},
    razon_social: {type: String, requied: true},
    sector: {type: String, requied: true},
    subsector: {type: String, requied: true},
    ventas: {type: Number, requied: true},
    pasivo_total: {type: Number, requied: true},
    pasivo_cp: {type: Number, requied: true},
    deuda_financiera_cp: {type: Number, requied: true},
    capital_contable: {type: Number, requied: true},
    ebitda: {type: Number, requied: true},
    gastos_financieros: {type: Number, requied: true},
    activo_total: {type: Number, requied: true},
    activo_circulante: {type: Number, requied: true},
    utilidad_neta: {type: Number, requied: true},
    resultado_ejercicio: {type: Number, requied: true},
    capital_social: {type: Number, requied: true},
    ebit: {type: Number, requied: true},
    terminos: {type: Boolean, require: true}
    }, {
        timestamps : true
});


module.exports = model('Presolicitud', PresolicitudSchema);