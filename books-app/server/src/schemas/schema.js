const { gql } = require('apollo-server-express')
const typeDefs = gql`
  type Book {
    id: ID,
    title: String,
    genre: String,
    author: Author
  }
  type Author {
    id: ID!,
    name: String,
    age: Int,
    books: [Book]
  }
  #ROOT TYPE
  type Query {
    books: [Book],
    authors: [Author],
    book (id: ID!): Book,
    author (id: ID!): Author,
  }
  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(title: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;