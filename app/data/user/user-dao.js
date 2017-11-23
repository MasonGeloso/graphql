const db = require('../db/index.js');

const COLLECTION = 'users';

const findAll = function(done) {
    db.findAll(COLLECTION, done);
};

const findById = function(options, done) {
    db.findById(COLLECTION, options, done);
};

const findByIds = function(options, done) {
    db.findByIds(COLLECTION, options, done);
};

const add = function(user, done) {
    db.add(COLLECTION, user, done);
};

const update = function(user, done) {
    db.update(COLLECTION, user, done);
};

const clear = function(done) {
    db.clear(COLLECTION, done);
};

module.exports = { findAll, findById, findByIds, add, update, clear };
