const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    img : { type:String},
    author : { type:String,required:true},
    location : { type:String,required:true},
    description : { type:String,required:true}
})

const Insta = new mongoose.model("Insta",postSchema);
module.exports = Insta;