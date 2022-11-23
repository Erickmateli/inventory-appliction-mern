const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//initialize express app 
const app = express();

//middlewares for handling data
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//create routes
app.get("/",(req,res)=>{
    res.send("This is home page")
})
const PORT = process.env.PORT || 5000;

//connect to DB and start the server

mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(PORT,() =>{
        console.log(`server running on ${PORT}`)
    })
}).catch((error) =>{
    console.log(error)
})