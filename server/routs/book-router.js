const bookRouter = require('express').Router()
const bookCtrl = require('../controllers/book-ctrl')

bookRouter.post('/',bookCtrl.createBook)
bookRouter.get('/',bookCtrl.getAllBooks)
bookRouter.get('/id/:id',bookCtrl.getBookById)
bookRouter.get('/name/:name',bookCtrl.getBookByName)
bookRouter.delete('/delete/:id',bookCtrl.deleteBook)
bookRouter.put('/update/:id',bookCtrl.updateBook)

module.exports = bookRouter
