const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
}
type Cryptid {
    _id: ID
    name: String
    alias: String
    description: String
    photo: String
    photoCredits: String
    location: String
    wikiLink: String
}
type Auth {
    token: ID
    user: User
}
type Query {
    user: User
    product(_id: ID!): Product
}
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;