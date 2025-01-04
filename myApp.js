require('dotenv').config();
let bodyParser = require('body-parser')
let express = require('express');
let app = express();

console.log("Hello World");

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); 
});
app.use(bodyParser.urlencoded({ extended: false }));  

app.route('/name')
  // GET request handler (for form data)
  .get((req, res) => {
    res.sendFile(__dirname + "/views/index.html");  // Ensure your form is in this file
  })
  // POST request handler (to handle form submission)
  .post((req, res) => {
    const { first, last } = req.body; // Retrieve the data from the body
    if (first && last) {
      res.json({ name: `${first} ${last}` });
    } else {
      res.status(400).json({ error: "Both 'first' and 'last' body parameters are required." });
    }
  });


app.get('/now', (req, res, next) => {
  req.time = new Date().toString(); 
  next();  
}, function(req, res) {
  res.json({ time: req.time });  
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use('/public', express.static(__dirname + '/public'));



app.get('/json', (req, res) => {
    let message = "Hello json"; 
  
    if (process.env.MESSAGE_STYLE === "uppercase") {
      message = message.toUpperCase(); 
    }
  
    res.json({ "message": message }); 
  });

  app.get('/:word/echo', (req, res) => {
    const word = req.params.word; 
    res.json({ echo: word });     
  });



































 module.exports = app;
