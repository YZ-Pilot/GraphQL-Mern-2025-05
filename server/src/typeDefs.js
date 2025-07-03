import { gql } from "apollo-server";

export const typeDefs = gql`
    type Post {
        id: ID!
        title: String!
        author: User!
    }

    type User {
        id: ID!
        name: String!
        posts: [Post]
    }

    type Query {
        post(id: ID!): Post
        user(id: ID!): User
    }
`;
