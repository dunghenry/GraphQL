const Author = require('../models/author.model');
const Book = require('../models/book.model');
const mongoDataMethods = {
    getAllBook: async () => await Book.find({}),
    getAllAuthor: async () => await Author.find({}),
    getBook: async (id) => await Book.findById({ _id: id }),
    getAuthor: async (id) => await Author.findById({ _id: id }),
    getAuthorABook: async (authorId) => await Author.findById({ _id: authorId }),
    getBooksAuthor: async (idAuthor) => await Book.find({ authorId: idAuthor }),
    createBook: async args => {
        const newBook = new Book(args);
        return await newBook.save();
    },
    createAuthor: async args => {
        const newAuthor = new Author(args);
        return await newAuthor.save();
    }
}

module.exports = mongoDataMethods;