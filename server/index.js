const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const dbConnection = require('./DB')
const BookRouter = require('./routs/book-router')
const apiPort = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

const path = require('path');

// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     // Handle React routing, return all requests to React app
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     });
// }


dbConnection.on('error', () => { console.log("dbConnection error"); })

app.get('/', (req, res) => {
    res.status(200).json({ success: true, massage: "HELLO WORLD SERVER WORKING" })
})
app.use('/books', BookRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))