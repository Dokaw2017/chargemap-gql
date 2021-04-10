import { ApolloServer } from "apollo-server-express";
import express from "express";
import connectMongo from "./db/db.js";
import dotenv from "dotenv";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import { checkAuth } from "./passport/authenticate.js";

dotenv.config();

(async () => {
  try {
    const connect = await connectMongo();
    if (connect) {
      console.log("connected succesfully");
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req, res }) => {
        if (req) {
          const user = await checkAuth(req, res);
          console.log("app", user);
          return {
            req,
            res,
            user,
          };
        }
      },
    });

    const app = express();

    server.applyMiddleware({ app });

    app.listen({ port: 3001 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:3001${server.graphqlPath}`
      )
    );
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();
