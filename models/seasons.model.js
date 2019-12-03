const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const seasons = mongoose.model('Seasons', new Schema({}, { collection: 'list_seasons' }));

module.exports = seasons;