const express = require('express');

const resources = require('../models/resourceModel');

const router = express.Router();

router.get('/', (req, res) => {
    resources.find()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not retrieve resources' });
        })
})

router.post('/', (req, res) => {
    const newResource = req.body;

    resources.add(newResource)
        .then(count => {
            res.status(201).json(count);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not add resource' });
        })
})

module.exports = router;