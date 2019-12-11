const express = require('express')
const mongoose = require('mongoose')
const uri = require('./config/config')
const cors = require('cors')
const fs = require('fs')

const PORT = process.env.PORT || 5000
const app = express()

let servRun = false;

app.use(cors());
app.use(express.json());
const files = (fs.readdirSync('./routes')).join('').split('.js').filter(function(el) { return el.length != 0 });

class Routes {
    constructor(name) {
        this.name = name;
    }
    getRoutes() {
        let data = fs.readFileSync(`./routes/${this.name}.js`);
        app.use(`/${this.name}`, eval(data.toString()));
    }
}

files.forEach(element => {
    new Routes(element).getRoutes();
});

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