import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl52mr7l5294101uegtkshfme/master',
  cache: new InMemoryCache()
})