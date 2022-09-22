const express = require('express');
const { body } = require('express-validator');
const { signup, login } = require('../../controllers/auth.controller');

const router = express.Router();

/* POST add user */
router.post('/signup', signup);

router.post('/login', login);

module.exports = router;