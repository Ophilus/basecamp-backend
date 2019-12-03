const router = require('express').Router();
let Episodes = require('../models/episodes.model');

router.route('/').get((req, res) => {
    Episodes.find()
        .then(list_episodes => res.json(list_episodes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Episodes.findById(req.params.id)
        .then(list_episodes => res.json(list_episodes))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;