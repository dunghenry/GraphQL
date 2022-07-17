import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import {ApolloServer} from 'apollo-server-express'
import typeDefs from './schemas/schema'
import resolvers from './resolvers/resolvers';
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(helmet());
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen(port, () => console.log(`Server listening on http://localhost:${port}${server.graphqlPath}`));
})

