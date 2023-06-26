const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Bookmark {
    _id: ID
    bookmarkDate: String
    cryptids: [Cryptid]
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

type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    bookmarks: [Bookmark]
}

type Auth {
    token: ID
    user: User
}

type Query {
    cryptid(_id: ID!): Cryptid
    user: User
    bookmark(_id: ID!): Bookmark
}

type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, password: String!): Auth
    addBookmark(cryptids: [ID]!): Bookmark
    updateUser(firstName: String, lastName: String, username: String, password: String): User
    login(username: String!, password: String!): Auth
}
`;

module.exports = typeDefs