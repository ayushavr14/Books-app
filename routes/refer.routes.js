const {createUser,ReferredUser} = require('../controllers/refer')

const express = require('express');
const router = express.Router();

// ROUTE FOT GET DATA OF A USER
router.post('/createUser', createUser);
router.post('/ReferredUser', ReferredUser);


module.exports = router;