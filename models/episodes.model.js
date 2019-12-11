const mongoose = require('mongoose')

const { Schema } = mongoose;

const episodes = mongoose.model('Episodes', new Schema({}, { collection: 'list_episodes' }));

module.exports = episodes;