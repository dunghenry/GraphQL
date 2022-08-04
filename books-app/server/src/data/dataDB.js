const Author = require('../models/author.model');
const Book = require('../models/book.model');
const mongoDataMethods = {
    getAllBook: async () => {
        return await Book.find({})
    },
    getAllAuthor: async () => {
        return await Author.find({});
    },
    getBook: async (id) => {
        return await Book.findById({ _id: id });
    },
    getAuthor: async (id) => {
        return await Author.findById({ _id: id });
    },
    getAuthorABook: async (authorId) => {
        return await Author.findById({ _id: authorId })
    },
    getBooksAuthor: async (idAuthor) => {
        return await Book.find({ authorId: idAuthor });
    },
    createBook: async args => {
        const newBook = new Book(args);
        const savedBook = await newBook.save();
        return savedBook;
    },
    createAuthor: async args => {
        const newAuthor = new Author(args);
        const savedAuthor = await newAuthor.save();
        return savedAuthor;
    }
}

module.exports = mongoDataMethods;