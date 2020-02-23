const db = require('../data/db-config');

module.exports = {
    find,
    add
}

function find() {
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select('tasks.description as task description', 'projects.name as project name', 'projects.description as project description')
}

function add(task) {
    return db('tasks').insert(task, "id");
}