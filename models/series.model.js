const mongoose = require('mongoose')

const { Schema } = mongoose;

var Series = mongoose.model('Series', new Schema({}, { collection: 'list_series' }));

module.exports = Series;