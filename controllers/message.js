const Message = require('../models/message');

const getMessage = (req, res) => {
    Message.find()
        .populate('user', 'name')
        .then(result => {
            res.status(200).json({
                messages: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

const createMessage = (req, res) => {
    const content = req.body.content;
    const user = req.userId;
    const message = new Message({
        content: content,
        user: user
    });
    message.save()
        .then(result => {
            res.status(201).json({
                message: 'Message created successfully!',
                message: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

module.exports = {
    getMessage: getMessage,
    createMessage: createMessage
};
