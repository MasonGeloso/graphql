const _ = require('lodash');
const dbClient = require('./mongo-client');

const insert = function(collection, db, docToAdd, next) {
    db.collection(collection).insertOne(docToAdd, next);
};

const update = function(collection, db, docToUpdate, next) {
    db.collection(collection).findOneAndReplace({ 'id': docToUpdate.id }, docToUpdate, (err, result) => next(err, result.value));
};

const findAll = function(collection, db, next) {
    findImpl(collection, db, {}, {}, next);
};

const findByIds = function(collection, db, options, next) {
    const ids = _.isArray(options.ids) ? options.ids : [options.ids];
    findImpl(collection, db, { id: { $in: ids } }, options, next);
};

const findById = function(collection, db, options, next) {
    db.collection(collection).findOne({ id: options.id }).then((doc) => next(null, doc));
};

const findImpl = function(collection, db, query, options, next) {
    let cursor;
    if (options.limit) {
        cursor = db.collection(collection).find(query).limit(options.limit);
    } else {
        cursor = db.collection(collection).find(query);
    }

    let docs = [];
    cursor.each((err, doc) => {
        if (doc != null) {
            docs.push(doc);
        } else {
            next(null, docs);
        }
    });
};

const clear = function(collection, db, next) {
    db.collection(collection).deleteMany({}, next);
};

exports.add = function(collection, docToAdd, done) {
    dbClient.execute((db, next) => insert(collection, db, docToAdd, next), done);
};

exports.update = function(collection, docToUpdate, done) {
    dbClient.execute((db, next) => update(collection, db, docToUpdate, next), done);
};

exports.findAll = function(collection, done) {
    dbClient.execute((db, next) => findAll(collection, db, next), done);
};

exports.findById = function(collection, options, done) {
    dbClient.execute((db, next) => findById(collection, db, options, next), done);
};

exports.findByIds = function(collection, args, done) {
    dbClient.execute((db, next) => findByIds(collection, db, args, next), done);
};

exports.clear = function(collection, done) {
    dbClient.execute((db, next) => clear(collection, db, next), done);
};
