import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/clmzkclgm0za701ukbduuh20c/master",
    cache: new InMemoryCache()
});

export default client;