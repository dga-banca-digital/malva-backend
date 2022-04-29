const Client = require('../models/client');
const { v4: uuidv4 } = require('uuid');
const { getToken, getTokenData } = require('../config/jwt');
const { getTemplate, sendEmail } = require('../config/send_email');



const register = async (req, res) => {
    try {

        // Obtener la data del usuario: name, email
        const { rfc, razon_social, email, password } = req.body;

        // Verificar que el usuario no exista
        let client = await (Client.findOne({ email }) && Client.findOne({ rfc })) || null;

        if(client !== null) {
            return res.json({
                success: false,
                msg: 'Error: el correo electrónico ya está en uso'
            });
        }

        // Generar el código
        const code = uuidv4();

        // Crear un nuevo usuario
        client = new Client({ rfc, razon_social, email, password, code });

        // Generar token
        const token = getToken({ email, code });

        // Obtener un template
        const template = getTemplate(razon_social, token);

        // Guardar cliente
        await client.save((error,response) =>{
            if(error){
                  console.log(error)
            }
            else{
                  console.log("succesfull inserted : ", response)
            }
       });

        // Enviar el email
        
        await sendEmail(email, 'Codigo de Verificacion', template);

        res.json({
            success: true,
            msg: 'Registrado correctamente'
        });

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al registrar usuario'
        });
    }
}


module.exports = {
    register
}