const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

router.post(
    `/user/:code`,
    controller.user
);

router.get(
    '/user/:code',
    controller.user
);

module.exports = router;