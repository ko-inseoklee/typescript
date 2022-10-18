import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
});

export const GetDepartMents = gql`
    query {
       departments{
            id,
            name
       }
    }
`;

export const SaveDepartment = gql`
    mutation createDepartment($name: String!) {
        createDepartment(name: $name) {
            name
        }
    }
`;

export default client;