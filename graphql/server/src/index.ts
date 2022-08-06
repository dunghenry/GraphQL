import { IPort } from './types/index.d';
import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoDataMethods from './data/dataDB';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer, Config, ExpressContext } from 'apollo-server-express'
import typeDefs from './schemas/schema'
import resolvers from './resolvers/resolvers';
import './configs/connect.db';
const app: Application = express();
const port: IPort = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods })
} as Config<ExpressContext>);
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen(port, () => console.log(`Server listening on http://localhost:${port}${server.graphqlPath}`));
})

