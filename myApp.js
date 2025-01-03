let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World")


//app.METHOD(PATH, HANDLER)
//HANDLER = function(req,res){res.send("string")}
//Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. 
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req,res)=>{
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
      }
      
    res.json({"message": "Hello json"})
});


























 module.exports = app;
