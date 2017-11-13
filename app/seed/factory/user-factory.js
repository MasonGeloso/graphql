const faker = require('faker');

/**
 * Number of created users.
 */
const _userCount = 15;

const _getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const getCount = () => _userCount;

const getRandomId = () => {
    return _getRandomNumber(1, _userCount);
};

const getRandomIds = (id, minUsers, maxUsers) => {
    const users = new Set();
    for (let i = 0; i < _getRandomNumber(minUsers, maxUsers); i++) {
        const randomId = getRandomId();
        // A user should not follow himself
        if (randomId != id) {
            users.add(randomId);
        }
    }

    return [...users];
};

const create = (id) => {
    return {
        'id': id,
        'userName': faker.internet.userName(),
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'birthday': faker.date.past(),
        'address': id,
        'followers': getRandomIds(id, 1, 6)
    };
};


module.exports = { create, getCount, getRandomId, getRandomIds };
