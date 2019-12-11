const router = require('express').Router();
let Seasons = require('./models/seasons.model');

router.route('/').get((req, res) => {
    Seasons.find()
        .then(list_seasons => res.json(list_seasons))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name').get((req, res) => {
    Seasons.find({ 'relatedShow': req.params.name })
        .then(list_seasons => res.json(list_seasons))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name/:season').get((req, res) => {
    Seasons.find({ 'relatedShow': req.params.name, 'relatedSeason': req.params.season })
        .then(list_seasons => res.json(list_seasons))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;