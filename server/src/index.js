import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

const app = express();

import Schema from './graphql/Schema'
import Resolvers from './graphql/Resolvers'

// const pubsub = new PubSub();

const defaultQuery = `
query getCount {
  count
}
mutation increaseCount {
  countIncr
}
subscription onCountIncrease {
  count
}
`

const server = new ApolloServer({
  typeDefs: Schema,
  resolvers: Resolvers,
  playground: {
    responses: ['{}'],
    tabs: [
      {
        query: defaultQuery,
      },
    ],
  }
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
