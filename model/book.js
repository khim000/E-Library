const mongoose = require("mongoose");


const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        unique:false,
        lowercase:true
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        unique: false,
        lowercase: true,
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        lowercase: true,
    },
    url:{
        type:String,
        required:[true,"Invalid URL"]
    },
    fileUrl:{
        type:String,
        required: [true, "Book file object is required"],
    },
    imageUrl: {
        type: String,
        required: [true, "Book cover image is required"],
    }

});

const Book=mongoose.model("books",bookSchema);

module.exports=Book;