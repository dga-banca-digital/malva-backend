const Client = require('../models/client')


const login = async (req, res) => {
    try{
        // recibe datos
        const { email, password} = req.body;

        // revisa existencia del cliente
        const client = await Client.findOne({ email }) || null;

        if(client === null) {
            return res.json({
                success: false,
                msg: "El usuario no existe"
            });
        }
        
        // revisa que la contraseña sea correcta
        if(client.password !== password) {
            return res.json({
                succes: false,
                msg: "Contraseña Incorrecta"
            });
        }

        // revisa que la cuenta esté verificada
        // if(client.status !== 'VERIFIED') {
        //     return res.json({
        //         succes: false,
        //         msg: "La cuenta no está verificada"
        //     });
        // }

        // da acceso
        return res.json({
            success: true,
            msg: "Pasele Joven!",
            client: client.code
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
    login
}