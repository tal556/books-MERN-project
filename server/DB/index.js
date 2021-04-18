const mongoose = require('mongoose')

const  constDBconcotionString = process.env.DB;
mongoose
    .connect( "mongodb://127.0.0.1:27017/library", { useNewUrlParser: true, useUnifiedTopology: true  })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
