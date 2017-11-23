const faker = require('faker');
const userFactory = require('./user-factory');

const _postCount = 30;

const _getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const getCount = () => _postCount;

const getRandomIds = (id, min, max) => {
    const posts = new Set();
    for (let i = 0; i < _getRandomNumber(min, max); i++) {
        posts.add(''+_getRandomNumber(1, _postCount));
    }
    // Spread it to an array
    return [...posts];
};

const create = (id) => {
    return {
        'id': `${id}`,
        'title': faker.lorem.sentence(),
        'text': faker.lorem.paragraph(),
        'author': userFactory.getRandomId()
    };
};

module.exports = { create, getCount, getRandomIds };
