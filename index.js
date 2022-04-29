//Required libraries
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const initDB = require('./config/db')

// const Presolicitud = require('./models/formulario0')
// const register = require('./models/register')

const presolicitudrouters = require('./routes/presolicitud')
const registerRouters = require('./routes/register')
const confirmationRouters = require('./routes/confirmation')
const loginRouters = require('./routes/login')
const userRouters = require('./routes/user')

//Configuration app
const port = 8081;

//INITIALIATION
const app = express();

//Accept "all" headers
app.use(cors());

//parse aplication/x-www-form-urlencoded y json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ruta de presolicitud
app.use(presolicitudrouters)

// ruta de registro
app.use(registerRouters)

// ruta de confirmacion
app.use(confirmationRouters)

// ruta de login
app.use(loginRouters)

// ruta de usuario
app.use(userRouters)


//Awake server
app.listen(port, () => {
    console.log(`App escuchando en: puerto ${ port }`)
});

initDB();
