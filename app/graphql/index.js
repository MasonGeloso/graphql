const schema = require('./schema/index.js');
const graphqlHTTP = require('express-graphql');

const graphql = graphqlHTTP({
    schema: schema.createSchema(),
    graphiql: true // Activate the GraphiQL client
});

module.exports = { http: graphql };
