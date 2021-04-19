// const mongoose = require('mongoose')
// // "mongodb://127.0.0.1:27017/library"
// const  constDBconcotionString = process.env.DB;
// mongoose
//     .connect( constDBconcotionString, { useNewUrlParser: true, useUnifiedTopology: true  })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// const db = mongoose.connection

// module.exports = db


const mongoose = require('mongoose')
// "mongodb://127.0.0.1:27017/library"
const  constDBconcotionString = process.env.DB;
mongoose
    .connect( constDBconcotionString, { useNewUrlParser: true, useUnifiedTopology: true  })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
