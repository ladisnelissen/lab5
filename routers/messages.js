const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages.js');

router.get('/', messagesController.getAll);

router.get('/:id', messagesController.getId);

router.post('/', messagesController.create);

router.put('/:id', messagesController.update);

router.delete('/:id', messagesController.remove);

module.exports = router;