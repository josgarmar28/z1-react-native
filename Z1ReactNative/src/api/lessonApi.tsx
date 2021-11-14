import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

import { Data} from '../interfaces/lessonInterfaces';

const client = new ApolloClient({
    uri: 'https://tech.z1.digital/graphql',
    cache: new InMemoryCache()
});

export const query = client.query<Data>({
    query: gql`
    query {
        items {
            id
            title
            image
            author
            category {
                id
                title
            }
            content
        }
      }
`});

