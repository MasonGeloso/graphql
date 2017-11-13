const promise = require('../promise');
const blogDao = require('../../data/blog/blog-dao');

exports.findAll = function() {
    return promise.execute(blogDao.findAll);
};

exports.findByIds = function(args) {
    return promise.execute(blogDao.findByIds, args);
};
