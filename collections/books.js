const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://0.0.0.0:27017/project");
const projectschema = new mongoose.Schema({
    name:String,
    price:Number,
   course:String,
   author:String
})
const collection= mongoose.model("books",projectschema);
module.exports =collection