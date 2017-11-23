const postFactory = require('./post-factory');

const blogCount = 1;

const _getPostIds = () => {
    const posts = [];
    for (let i = 1; i <= postFactory.getCount(); i++) {
        posts.push( `${i}`);
    }
    return posts;
};

const getCount = () => blogCount;

const create = (id) => {
    return {
        'id': `${id}`,
        'name': 'GraphQL - Sample Project Blog',
        'description': 'Small application demonstrating GraphQL',
        'posts': _getPostIds()
    };
};

module.exports = { create, getCount };
