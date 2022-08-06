import mongoose from 'mongoose';
import { IAuthor, IBook } from './../types/index.d';
interface IdData {
    id: mongoose.Schema.Types.ObjectId;
}
interface IAuthorData {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
interface IBookData {
    _id: mongoose.Schema.Types.ObjectId;
    authorId: mongoose.Schema.Types.ObjectId;
    title: string;
    genre: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
const resolvers = {
    Query: {
        books: async (_, __, { mongoDataMethods }) => await mongoDataMethods.getBooks(),
        authors: async (_, __, { mongoDataMethods }) => await mongoDataMethods.getAuthors(),
        author: async (_, args: IdData, { mongoDataMethods }) => await mongoDataMethods.getAuthorById(args.id),
        book: async (_, args: IdData, { mongoDataMethods }) => await mongoDataMethods.getBookById(args.id)
    },
    Book: {
        author: async (parent: IBookData, _, { mongoDataMethods }) => await mongoDataMethods.getAuthorAndBook(parent.authorId)
    },
    Author: {
        books: async (parent: IAuthorData, _, { mongoDataMethods }) => await mongoDataMethods.getBooksAndAuthor(parent._id),
    },
    Mutation: {
        createAuthor: async (_, args: IAuthor, { mongoDataMethods }) => await mongoDataMethods.createAuthor(args),
        createBook: async (_, args: IBook, { mongoDataMethods }) => await mongoDataMethods.createBook(args),
    }
}

export default resolvers;