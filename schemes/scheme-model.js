const db = require('../data/db.config');

function find() {
    return db('schemes')
};

function findById(id) {
    return db('schemes').where({id})
};

function findSteps(id) {
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({scheme_id : id})
};

function findAllSteps() {
    return db('steps')
}

function add(schemeData) {
    return db('schemes').insert(schemeData);
}

module.exports = {
    find,
    findById,
    findSteps,
    findAllSteps,
    add
}