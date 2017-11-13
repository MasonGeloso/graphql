const db = require('../db/index.js');

const COLLECTION = 'blogs';

const findAll = function(done) {
    db.findAll(COLLECTION, done);
};

const findByIds = function(ids, done) {
    db.findByIds(COLLECTION, ids, done);
};

const add = function(address, done) {
    db.add(COLLECTION, address, done);
};

const clear = function(done) {
    db.clear(COLLECTION, done);
};

module.exports = { findAll, findByIds, add, clear };
