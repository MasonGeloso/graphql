const typeDefs = [`
    type Blog {
      id: String!
      name: String!
      description: String,
      posts(first: Int): [Post]!
    }

    type Post {
        id: ID!
        title: String!
        text: String!
        author: User!
    }

    type User {
        id: ID!
        userName: String!
        firstName: String!
        lastName: String!
        birthday: String
        address: Address,
        followers(first: Int): [User]!
    }

    type Address {
        id: ID!
        street: String
        houseNumber: Int
        zipCode: Int
        city: String
        country: String
    }
`];

module.exports = typeDefs;
