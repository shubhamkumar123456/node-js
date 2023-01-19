const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://0.0.0.0:27017/project");
const projectschema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})
const collection= mongoose.model("watch",projectschema);
module.exports =collection