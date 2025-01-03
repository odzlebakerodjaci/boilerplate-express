let express = require('express');
let app = express();

console.log("Hello World")


//app.METHOD(PATH, HANDLER)
//HANDLER = function(req,res){res.send("string")}
//Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. 
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.use(__dirname + '/public', express.static());




























 module.exports = app;
