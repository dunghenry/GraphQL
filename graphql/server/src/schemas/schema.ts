import { gql } from'apollo-server-express';

const typeDefs = gql`
type Book{
    id: ID,
    title: String,
    genre: String,
}
type Query{
    books: [Book],
}
`;

export default typeDefs;