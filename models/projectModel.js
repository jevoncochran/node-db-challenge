const db = require('../data/db-config');

module.exports = {
    findProjects,
    add,
    findById
}

function findProjects() {
    return db('projects')
        .join('tasks', 'projects.id', 'tasks.project_id')
}

function add(project) {
    return db('projects').insert(project, "id");
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first()
        // .join('tasks', 'projects.id', 'tasks.project_id')
}