const nodemailer = require('nodemailer');
const config = require('./appConfig')

const mail = {
    user: 'dga.banca.digital@gmail.com',
    pass: 'Diciembre2021'
}

// Url de conexion con el frontend
const frontEndpoint = config.frontEndpoint;


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    tls: {
        rejectUnauthorized: false
    },
    secure: false, // true for 465, false for other ports
    auth: {
      user: mail.user, // generated ethereal user
      pass: mail.pass, // generated ethereal password
    },
  });

  const sendEmail = async (email, subject, html) => {
    try {
        
        await transporter.sendMail({
            from: `DGA Banca Digital <${ mail.user }>`,
            to: email, 
            subject,
            text: "Correo de Prueba",
            html, 
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const getTemplate = (razon_social, token) => {
      return `
        <h2>Hola ${razon_social}</h2>
        <p>Bienvenido. Por favor confirma dando click en el siguiente link.</p>
        <a href=${config.frontEndpoint}/confirmation/${token}> Confirmar correo</a>
        </div>
      `;
  }

  module.exports = {
    sendEmail,
    getTemplate
}