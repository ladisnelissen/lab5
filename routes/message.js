const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/message.js');

router.get('/', messagesController.getAll);

router.get('/:id', messagesController.getById);

router.post('/', messagesController.create);

router.put('/:id', messagesController.update);

router.delete('/:id', messagesController.deleteById);

module.exports = router;