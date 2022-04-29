const mongoose = require('mongoose');

// TODO: Hashear contraseñas

const ClientSchema = new mongoose.Schema({
    rfc: { type: String, required: true, unique:true},
    razon_social: {type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    code: { type: String, required: true},
    status: { type: String, required: true, default: 'UNVERIFIED'}
}, {
    timestamps : true
}
);

module.exports = mongoose.model('Client', ClientSchema);