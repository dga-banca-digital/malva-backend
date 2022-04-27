const Client = require('../models/client')


const user = async (req, res) => {
    try{
        // recibe datos
        code = req.params.code;

        // revisa existencia del cliente
        const client = await Client.findOne({ code });
        
        // da acceso
        return res.json({
            client
        })


    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error en el Login'
        });
    }
}


module.exports = {
    user
}