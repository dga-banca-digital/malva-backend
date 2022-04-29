const Client = require('../models/client');
const { v4: uuidv4 } = require('uuid');
const { getToken, getTokenData } = require('../config/jwt');

const confirm = async (req, res) => {
    try {

       // Obtener el token
       token = req.params.token;
       
       // Verificar la data
       const data = await getTokenData(token);

       if(data === null) {
            return res.json({
                success: false,
                msg: 'Error al obtener data'
            });
       }

       const { email, code } = data.data;
       // Verificar existencia del usuario
       const client = await Client.findOne({ email }) || null;

       if(client === null) {
            return res.json({
                success: false,
                msg: 'Usuario no existe'
            });
       }

       // Verificar el código
       if(code !== client.code) {
            return res.json({
                success: false,
                msg: 'codigo no verificado'
            });
       }

       // Actualizar usuario
       client.status = 'VERIFIED';
       await client.save();

       // Redireccionar a la confirmación
       // return res.redirect('/confirm.html'); // ver frontend
       return res.json({
           success: true,
           msg: " Usuario verificado"
       })
        
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al confirmar usuario'
        });
    }
}


module.exports = {
    confirm
}