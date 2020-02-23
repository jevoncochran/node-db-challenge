const express = require('express');

const projects = require('../models/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.findProjects()
        .then(projects => {
            console.log(projects);
            projects.map(project => {
                if (project.completed === 0) {
                    return project.completed = false;
                } else {
                    return project.completed = true;
                }
            })
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

router.get('/:id', (req, res) => {
    const { id } = req.params;

    projects.findById(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ error: 'Could not find project with the specified id' })
            } else {
                res.status(200).json(project);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not retrieve project' });
        })
})

module.exports = router;