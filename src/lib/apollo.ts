import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u42pxp0jp201uihmtn3z4n/master',
  cache: new InMemoryCache()
})