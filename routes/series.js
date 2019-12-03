const router = require('express').Router();
let Series = require('../models/series.model');

router.route('/').get((req, res) => {
    Series.find()
        .then(list_series => res.json(list_series))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Series.findById(req.params.id)
        .then(list_series => res.json(list_series))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;