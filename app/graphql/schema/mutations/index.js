const mutations = [`
    createUser(
        userName: String!
        firstName: String!
        lastName: String!
    ): User

    addFollower(
        followedUser: ID!
        follower: ID!
    ): User

    createPost(
        title: String!
        text: String!
        author: ID!
    ): Post
`];

module.exports = mutations;
