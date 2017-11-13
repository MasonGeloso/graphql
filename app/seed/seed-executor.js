/* eslint-disable */
const addDataItem = function(entityName, dao, item) {
    dao.add(item, (err) => {
        if (err) {
            return console.error(`Error seeding ${entityName} entity with id=${item.id}`, err);
        }
    });
};

exports.executeSeed = function(entityName, dao, data) {
    console.log(`Seeding ${entityName} data`);
    dao.clear(() => data.forEach(item =>addDataItem(entityName, dao, item)));
};
/* eslint-enable */
