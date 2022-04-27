const jwt = require('jsonwebtoken');

const getToken = (payload) => { // payload: data que se va a convertir en token
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: '365d' });
}

const getTokenData = (token) => {
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if(err) {
            console.log('Error al obtener data del token');
        } else {
            data = decoded;
        }
    });

    return data;
}

module.exports = {
    getToken,
    getTokenData
}