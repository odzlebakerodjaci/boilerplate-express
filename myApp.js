require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    let message = "Hello json"; // Default message

    // Check if MESSAGE_STYLE is set to "uppercase"
    if (process.env.MESSAGE_STYLE="uppercase") {
        message = message.toUpperCase(); // Convert message to uppercase
    }

    res.json({ "message": message }); // Send the final message in the response
});

module.exports = app;
