//jshint esversion: 6 


// requesting modules
const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");



const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html");
    

})


app.listen(process.env.PORT ||  3000 ,function(){
    console.log("Server running on port 3000");
})