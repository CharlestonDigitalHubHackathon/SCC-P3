const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/eFarmony-client";
app.use(express.static(distDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/eFarmony-client/index.html'))
})

// Initialize the app.
const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});

// CONTACTS API ROUTES BELOW