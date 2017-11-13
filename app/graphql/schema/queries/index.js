const queries = [`

    blogs(id: ID): [Blog]

    posts(first: Int): [Post]

    users(id: [ID]): [User]
`];

module.exports = queries;
