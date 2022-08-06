const resolvers = {
    Query: {
        books: async (_, __, { mongoDataMethods }) => await mongoDataMethods.getAllBook(),
        authors: async (_, __, { mongoDataMethods }) => await mongoDataMethods.getAllAuthor(),
        book: async (_, args, { mongoDataMethods }) => {
            // args = book =  {id}
            return await mongoDataMethods.getBook(args.id);
        },
        author: async (_, args, { mongoDataMethods }) => {
            // args = author =  {id}
            return await mongoDataMethods.getAuthor(args.id);
        },
    },
    Book: {
        author: async (parent, _, { mongoDataMethods }) => {
            //parent = book
            return await mongoDataMethods.getAuthorABook(parent.authorId);
        },
    },
    Author: {
        books: async (parent, _, { mongoDataMethods }) => {
            // parent = author
            return await mongoDataMethods.getBooksAuthor(parent._id);
        },
    },
    Mutation: {
        createAuthor: async (_, args, { mongoDataMethods }) => {
            //args = author = {name, age}
            return await mongoDataMethods.createAuthor(args);
        },
        createBook: async (_, args, { mongoDataMethods }) => {
            //args = book
            return await mongoDataMethods.createBook(args);
        },
    }
};

module.exports = resolvers;