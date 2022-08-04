const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/connect.db')
const port = process.env.PORT || 4000;
const app = express();
const resolvers = require('./resolvers/resolver');
const typeDefs = require('./schemas/schema');
const mongoDataMethods = require('./data/dataDB');
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(morgan("dev"));
connectDB();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods })
});

server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen(port, () => console.log(`Server listening on http://localhost:${port}${server.graphqlPath}`));
})