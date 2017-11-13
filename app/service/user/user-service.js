const promise = require('../promise');
const userDao = require('../../data/user/user-dao');

const _addUser = (user, done) => {
    userDao.add(user, (err, result) => {
        if (err) {
            done(err);
        }
        userDao.findById({ id: result.id }, done);
    });
};

const _addFollower = (followedUser, follower, done) => {
    userDao.findById(followedUser, (err, user) => {
        if (err) {
            return done(err);
        }

        user.followers.push(follower);
        userDao.update(user, (err, updatedUser) => done(null, updatedUser));
    });
};

exports.findAll = () => {
    return promise.execute(userDao.findAll);
};

exports.findById = (options) => {
    return promise.execute(userDao.findById, options);
};

exports.findByIds = (options) => {
    return promise.execute(userDao.findByIds, options);
};

exports.addFollower = (followedUser, follower) => {
    return promise.execute(_addFollower, followedUser, follower);
};

exports.add = (user) => {
    return promise.execute(_addUser, user);
};
