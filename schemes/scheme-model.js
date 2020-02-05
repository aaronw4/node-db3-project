const db = require('../data/db.config');

function find() {
    return db('schemes')
};

function findById(id) {
    return db('schemes').where({id})
};

module.exports = {
    find,
    findById
}