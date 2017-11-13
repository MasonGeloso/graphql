const faker = require('faker');

exports.create = (id) => {
    return {
        'id': id,
        'street': faker.address.streetAddress(),
        'city': faker.address.city(),
        'country': faker.address.country(),
        'houseNumber': faker.random.number(),
        'zipCode': faker.address.zipCode()
    };
};
