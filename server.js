const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express()

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0-unrti.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            userFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}





start()