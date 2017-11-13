const util = require('util');
const MongoClient = require('mongodb').MongoClient;

// TODO Set via env var
const DB_NAME = 'graphQL';

let url;
if (process.env.MONGO_HOST && process.env.MONGO_PORT) {
    url = util.format('mongodb://%s:%d/%s', process.env.MONGO_HOST, process.env.MONGO_PORT, DB_NAME);
} else {
    url = util.format('mongodb://mongo:27017/%s', DB_NAME);
}

exports.execute = function(fn, done) {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.error('error connecting to mongodb:', err);
            return done(err);
        }

        fn.call(null, db, (err, result) => {
            db.close();
            done(err, result);
        });
    });
};
