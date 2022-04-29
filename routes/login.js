const express = require('express');
const controller = require('../controllers/login');
const router = express.Router();

router.post(
    '/login',
    controller.login
);

router.get(
    '/login',
    controller.login
);

module.exports = router;