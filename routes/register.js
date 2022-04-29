const express = require('express');

// const controller = require('../controllers/register')
const controller = require('../controllers/register')

const router = express.Router();

// Ruta: /user POST
/* 
router.post( `/register`,
            contoller.insertData 
);
 */

// Ruta: /user POST


router.post( `/register`,
            controller.register
);

module.exports = router;