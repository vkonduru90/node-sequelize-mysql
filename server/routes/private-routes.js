const express = require('express');
const TelcoMiddleware = require('./telco-middleware');
const { createUser } = require('./private/user/create-user');

const router = express.Router();

router.post('/user', TelcoMiddleware(createUser));

module.exports = router;
