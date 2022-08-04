const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    genre: {
        type: String,
    },
    title: {
        type: String,
    },
    authorId:{
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true
})
const Book = model('Book', bookSchema);
module.exports = Book;