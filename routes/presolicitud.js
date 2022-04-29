const express = require('express');

const contoller = require('../controllers/presolicitud')

const router = express.Router();

const path = 'presolicitud';


// Ruta: /user GET

router.get( `/${path}`,
            contoller.getData
);

// Ruta: /user POST
router.post( `/${path}`,
            contoller.insertData
);

module.exports = router;