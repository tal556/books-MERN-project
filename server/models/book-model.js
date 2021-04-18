const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
    {
        name:{type:String,required:true},
        numberOfPages:{type:Number,required:true}
    },
    {timestamps:true}
    )
    module.exports = mongoose.model('booksCollection',Book)

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

// const Book = new Schema(
//     {
//         // name:{type:String,required:true},
//         // numberOfPages:{type:Number,required:true}
//         name:String,
//         numberOfPages:Number,
//         date:{
//             type:Date,
//             default:Date.now
//         }

//     },
//     // {timestamps:true}
// )
// module.exports = mongoose.model('booksCollection',Book)
    