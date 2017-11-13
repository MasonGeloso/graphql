const promise = require('../promise');
const addressDao = require('../../data/address/address-dao');

const _findById = (options, done) => {
    // TODO Fix the result[0] problem
    addressDao.findById(options, (err, result) => {
        done(err, result[0]);
    });
};

exports.findById = function(options) {
    return promise.execute(_findById, options);
};
