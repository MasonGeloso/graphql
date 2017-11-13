const faker = require('faker');

const executor = require('./seed-executor');

const blogFactory = require('./factory/blog-factory');
const userFactory = require('./factory/user-factory');
const postFactory = require('./factory/post-factory');
const addressFactory = require('./factory/address-factory');

const blogDao = require('../data/blog/blog-dao');
const postDao = require('../data/post/post-dao');
const userDao = require('../data/user/user-dao');
const addressDao = require('../data/address/address-dao');

// sets locale to de
faker.locale = 'de';

const createItems = (factory, count) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
        items.push(factory.create(i));
    }
    return items;
};

const blogs = createItems(blogFactory, blogFactory.getCount());
const posts = createItems(postFactory, postFactory.getCount());
const users = createItems(userFactory, userFactory.getCount());
const addresses = createItems(addressFactory, userFactory.getCount());

exports.seedTestData = function() {
    executor.executeSeed('Blog', blogDao, blogs);
    executor.executeSeed('Post', postDao, posts);
    executor.executeSeed('User', userDao, users);
    executor.executeSeed('Address', addressDao, addresses);
};
