const express = require('express');

const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resourceRouter');
const taskRouter = require('./routers/taskRouter');

const server = express();

server.use(express.json());

// routers
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;