import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers"

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {port: 5001},
});

console.log("Server ready at ", url);
