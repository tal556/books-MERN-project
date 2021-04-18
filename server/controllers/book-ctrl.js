
const bookModel = require('../models/book-model')


function createBook(req, res) {

    const body = req.body;
    if (!body) {
        return res.status(400)
            .json({ success: false, message: 'no body found' })
    }

    const book = new bookModel(body);

    if (!book) {
        return res.status(400)
            .json({ success: false, message: 'no book found correct' })
    }
    book.save()
        .then(() => {
            return res.status(200)
                .json({ success: true, message: 'book saved' })
        })
        .catch(err => {
            return res.status(401)
                .json({ success: false, message: 'book not  saved' })
        })




}
function getAllBooks(req, res) {

    bookModel.find((err,docs) =>{
        if (err) {res.status(300).json({success:false,error:err})}
        if (!docs){res.status(400).json({succes:false,massage:"books not found"})}
        res.status(200).json({succes:true,data:docs})
    })
    




}

async function getBookById(req, res) {
    await bookModel.findById(req.params.id, (err, doc) => {
        if (err) { res.status(400).json({ success: false, error: err }) }
        if (!doc) { res.status(404).json({ sucsses: false, massege: "no book available" }) }
        res.status(200).json({ success: true, data: doc, message: "book updated " })
    })

}

async function getBookByName(req, res) {
    await bookModel.find(req.params.name, (err, docs) => {
        if (err) { res.status(400).json({ succes: false, massege: err }) }
        if (!docs) { res.status(403).json({ succes: false, massege: "no book with that name found" }) }
        res.status(200).json({ success: true, data: docs })

    })

}

async function updateBook(req, res) {
    await bookModel.findOneAndUpdate(req.params.id, req.body, (err, doc) => {
        if (err) { res.status(400).json({ success: false, error: err }) }
        res.status(300).json({ success: true, data: doc, message: "book updated " })
    })

}

async function deleteBook(req, res) {
    await bookModel.findOneAndDelete(req.params.id, req.body, (err, doc) => {
        if (err) { res.status(400).json({ success: false, error: err }) }
        res.status(300).json({ success: true, data: doc, message: "book updated " })
    })




}


module.exports = {
    createBook,
    getAllBooks,
    updateBook,
    deleteBook,
    getBookById,
    getBookByName
}