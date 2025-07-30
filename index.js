const path = require("path");
const express = require("express");
require("dotenv").config();
const app= express();
const imageRoute = require("./routes/route")
const connectToMongoDB  = require("./connection");

connectToMongoDB();

const { sendMail } = require("./controllers/sendMail");

app.set("view engine","ejs");
app.set("views",path.resolve("./view"));

app.use(express.urlencoded({extended: false}));

app.use("/",imageRoute);


app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`);    
});