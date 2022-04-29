const express = require('express');
const controller = require('../controllers/confirmation')
const router = express.Router();


router.get(
    `/confirmation/:token`, 
    controller.confirm
)

module.exports = router;