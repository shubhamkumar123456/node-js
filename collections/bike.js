const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://0.0.0.0:27017/project");
const projectschema = new mongoose.Schema({
    name:String,
    price:String,
    brand:String,
    category:String
})
const collection= mongoose.model("bike",projectschema);
module.exports =collection