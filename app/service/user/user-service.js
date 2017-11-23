const _ = require('lodash');
const promise = require('../promise');
const userDao = require('../../data/user/user-dao');

const _addUser = (user, done) => {
    userDao.add(user, (err, result) => {
        if (err) {
            return done(err);
        }
        userDao.findById({ _id: result.insertedId }, done);
    });
};

const _addFollower = (followedUser, follower, done) => {
    userDao.findById({ id: followedUser }, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(new Error(`No user found with id:${followedUser}`));
        }

        if (!user.followers) {
            user.followers = [];
        }

        if (_.indexOf(user.followers, follower) === -1) {
            user.followers.push(follower);
        }

        userDao.update(user, done);
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
