const db = require('../db/index.js');

const COLLECTION = 'addresses';

const findAll = function(done) {
    db.findAll(COLLECTION, done);
};

const findById = function(options, done) {
    db.findById(COLLECTION, options, done);
};

const add = function(address, done) {
    db.add(COLLECTION, address, done);
};

const clear = function(done) {
    db.clear(COLLECTION, done);
};

module.exports = { findAll, findById, add, clear };
