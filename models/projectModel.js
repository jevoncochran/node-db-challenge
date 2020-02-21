const db = require('../data/db-config');

module.exports = {
    findProjects,
    add
}

function findProjects() {
    return db('projects');
}

function add(project) {
    return db('projects').insert(project, "id");
}