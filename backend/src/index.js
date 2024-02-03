import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from "body-parser";
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js';
import pool from './dbConn.js';


  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
    // Note you must call `start()` on the `ApolloServer`
  // instance before passing the instance to `expressMiddleware`
  await server.start();

  // Specify the path where we'd like to mount our server
  app.use('/graphql', cors(), express.json(), expressMiddleware(server, {
    context: {
      db: pool
    }
  }));



export default await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
