import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js';
import pool from './dbConn.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const vercel_server = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => ({
    db: pool,
  })
});

console.log(`🚀  Server ready at: ${vercel_server.url}`);
export default ApolloServer

