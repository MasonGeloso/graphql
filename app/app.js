const express = require('express');
const seed = require('./seed/index.js');
const graphQL = require('./graphql/index.js');

// Seed some test data
seed.seedTestData();

// Create express app with GraphQL on top
const app = express();

app.use('/graphql', graphQL.http);
// Run the express app
app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));
