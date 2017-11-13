const promise = require('../promise');
const postDao = require('../../data/post/post-dao');

exports.findAll = function() {
    return promise.execute(postDao.findAll);
};

exports.findByIds = function(args) {
    return promise.execute(postDao.findByIds, args);
};

exports.add = function(args) {
    const executionHandler = (post, done) => {
        postDao.add(post, (err, result) => {
            if (err) {
                done(err);
            }
            postDao.findById(result.insertedId, done);
        });
    };
    return promise.execute(executionHandler, args);
};
