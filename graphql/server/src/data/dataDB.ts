import Author from "../models/author.model";
import Book from "../models/book.model";
import mongoose from "mongoose";
import { IAuthor, IBook } from "../types";
interface IId {
    id: mongoose.Schema.Types.ObjectId
}
const mongoDataMethods = {
    createAuthor: async (author: IAuthor) => {
        const newUser = new Author(author);
        return await newUser.save();
    },
    createBook: async (book: IBook) => {
        const newBook = new Book(book);
        return await newBook.save();
    },
    getAuthors: async () => await Author.find({}),
    getBooks: async () => await Book.find({}),
    getBookById: async (id: IId) => await Book.findById(id),
    getAuthorById: async (id: IId) => await Author.findById(id),
    getAuthorAndBook: async (authorId: IId) => await Author.findById({ _id: authorId }),
    getBooksAndAuthor: async (authorId: IId) => await Book.find({ authorId }),
}

export default mongoDataMethods;