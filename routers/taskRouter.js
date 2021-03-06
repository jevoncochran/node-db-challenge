const express = require('express');

const router = express.Router();

const tasks = require('../models/taskModel');

router.get('/', (req, res) => {
    tasks.find()
        .then(tasks => {
            console.log(tasks);
            tasks.map(task => {
                if (task.completed === 0) {
                    return task.completed = false;
                } else {
                    return task.completed = true;
                }
            })
            res.status(200).json(tasks);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not retrieve tasks' });
        })
})

router.post('/', (req, res) => {
    const newTask = req.body;

    tasks.add(newTask)
        .then(count => {
            res.status(201).json(count);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not add task' });
        })
})

module.exports = router;