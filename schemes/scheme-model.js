const db = require('../data/db.config');

function find() {
    return db('schemes')
}

module.exports = {
    find
}