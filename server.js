const express = require('express')
const mongoose = require('mongoose')
const uri = require('./config/config');

const PORT = process.env.PORT || 3000
const app = express()

let list;
let servRun = false;

app.use(express.json());
if (!servRun) {
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    const connection = mongoose.connection;

    app.listen(PORT, () => {
        console.log(`Server has been started and running on port: ${PORT}`)
        servRun = true;
    })
} else {
    servRun = false;
}
const seriesRouter = require('./routes/series');
const seasonsRouter = require('./routes/seasons');
const episodesRouter = require('./routes/episodes');
app.use('/series', seriesRouter);
app.use('/seasons', seasonsRouter);
app.use('/episodes', episodesRouter);