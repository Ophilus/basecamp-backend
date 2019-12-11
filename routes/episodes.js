const router = require('express').Router();
let Episodes = require('./models/episodes.model');

router.route('/').get((req, res) => {
    Episodes.find()
        .then(list_episodes => res.json(list_episodes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name/:season').get((req, res) => {
    Episodes.find({ 'relatedShow': req.params.name, 'relatedSeason': req.params.season })
        .then(list_episodes => res.json(list_episodes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name/:season/episode:number').get((req, res) => {
    Episodes.find({ 'relatedShow': req.params.name, 'relatedSeason': req.params.season, 'number': Number(req.params.number) })
        .then(list_episodes => res.json(list_episodes))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;