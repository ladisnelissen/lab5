var express = require('express');
var router = express.Router();

const messageController = require('../controllers/message');

router.get('/', messageController.getMessage);

router.post('/', messageController.createMessage);

module.exports = router;
