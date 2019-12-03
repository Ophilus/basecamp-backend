const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const episodes = mongoose.model('Episodes', new Schema({}, { collection: 'list_episodes' }));

module.exports = episodes;