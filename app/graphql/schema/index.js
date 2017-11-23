const { makeExecutableSchema } = require('graphql-tools');

const queries = require('./queries/index.js');
const typeDefs = require('./typedefs/index.js');
const mutations = require('./mutations/index.js');
const resolvers = require('./resolvers/index.js');

// Create executable schema
const schemaDef = [
    ...typeDefs,
    `type Query { ${queries} }`,
    `type Mutation { ${mutations} }`
];

module.exports = {
    createSchema: () => makeExecutableSchema({ typeDefs: schemaDef, resolvers: resolvers })
};
