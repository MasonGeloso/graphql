const db = require('../db/index.js');

const COLLECTION = 'posts';

const findAll = function(done) {
    db.findAll(COLLECTION, done);
};

const findById = function(options, done) {
    db.findById(COLLECTION, options, done);
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

module.exports = { findAll, findById, findByIds, add, clear };
