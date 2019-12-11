const mongoose = require('mongoose')

const { Schema } = mongoose;

const seasons = mongoose.model('Seasons', new Schema({}, { collection: 'list_seasons' }));

module.exports = seasons;