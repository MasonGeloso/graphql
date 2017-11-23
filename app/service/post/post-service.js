const promise = require('../promise');
const postDao = require('../../data/post/post-dao');

const _addPost = (user, done) => {
    postDao.add(user, (err, result) => {
        if (err) {
            return done(err);
        }
        postDao.findById({ _id: result.insertedId }, done);
    });
};

exports.findAll = function() {
    return promise.execute(postDao.findAll);
};

exports.findByIds = function(args) {
    return promise.execute(postDao.findByIds, args);
};

exports.add = (post) => {
    return promise.execute(_addPost, post);
};
