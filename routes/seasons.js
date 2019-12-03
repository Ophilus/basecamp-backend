const router = require('express').Router();
let Seasons = require('../models/seasons.model');

router.route('/').get((req, res) => {
    Seasons.find()
        .then(list_seasons => res.json(list_seasons))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Seasons.findById(req.params.id)
        .then(list_seasons => res.json(list_seasons))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;