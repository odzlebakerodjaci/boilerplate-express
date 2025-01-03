let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  let message = "Hello json"; // Default message

  // If the MESSAGE_STYLE environment variable is set to "uppercase"
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase(); // Convert message to uppercase
  }

  res.json({ "message": message }); // Send the message as a JSON response
});

module.exports = app;
