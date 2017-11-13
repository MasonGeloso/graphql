const blogService = require('../../../service/blog/blog-service');
const postService = require('../../../service/post/post-service');
const userService = require('../../../service/user/user-service');
const addressService = require('../../../service/address/address-service');

const _findById = (service, args) => {
    return (args.id) ? service.findByIds({ ids: args.id }) : service.findAll();
};

const resolvers = {
    Query: {
        blogs(obj, args) {
            return _findById(blogService, args);
        },

        posts(obj, args) {
            return _findById(postService, args);
        },

        users(obj, args) {
            return _findById(userService, args);
        }
    },

    Mutation: {
        createUser(obj, args) {
            return userService.add(args);
        },

        addFollower(obj, args) {
            return userService.addFollower(args.followedUser, args.follower);
        },

        createPost(obj, args) {
            return postService.add(args);
        }
    },

    Blog: {
        posts(obj, args) {
            return postService.findByIds({ ids: obj.posts, limit: args.first });
        }
    },

    Post: {
        author(obj) {
            return userService.findById({ id: obj.author });
        }
    },

    User: {
        address(obj) {
            return addressService.findById({ id: obj.address });
        },

        followers(obj, args) {
            return userService.findByIds({ ids: obj.followers, limit: args.first });
        }
    }
};

module.exports = resolvers;
