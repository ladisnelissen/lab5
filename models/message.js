var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Message', messageSchema);