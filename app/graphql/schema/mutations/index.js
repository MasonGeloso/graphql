const mutations = [`
    createUser(
        id: ID!
        userName: String!
        firstName: String!
        lastName: String!
    ): User

    addFollower(
        followedUser: ID!
        follower: ID!
    ): User

    createPost(
        id: ID!
        title: String!
        text: String!
        author: ID!
    ): Post
`];

module.exports = mutations;
