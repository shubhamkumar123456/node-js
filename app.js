const express= require('express');
const app= express();

const cars=require("./collections/cars")
const bike=require("./collections/bike")
const mobile=require("./collections/mobile")
const watchs=require("./collections/watch")
const books=require("./collections/books");
const { json } = require('express');
app.use(express.json())

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/cars",async(req,res)=>{
    let data =await cars.find();
    console.log(data)
    res.render("cars")
})
app.get("/books",async(req,res)=>{
    let data =await books.find();
    console.log(data)
    res.render("books")
})
app.get("/bike",async(req,res)=>{
    let data =await bike.find();
   
    console.log(data);

        res.render("bike",{data})
})
app.get("/watch",async(req,res)=>{
    let data =await watchs.find();
    console.log(data)
        res.render("watch")
})
app.get("/mobile",async(req,res)=>{
    let data =await mobile.find();
    console.log(data)
        res.render("mobile")
})

app.listen(3000)