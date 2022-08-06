const { Schema, model } = require('mongoose');
const authorSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    }
}, {
    timestamps: true
})
const Author = model('Author', authorSchema);
module.exports = Author;