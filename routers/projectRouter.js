const express = require('express');

const projects = require('../models/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.findProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not retrieve projects' });
        })
})

router.post('/', (req, res) => {
    const newProject = req.body;

    projects.add(newProject)
        .then(count => {
            res.status(201).json(count)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not add projects' });
        })
})

module.exports = router;