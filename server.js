const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

const app = express();
app.use(bodyParser.json());

const farmers = [
  {
    id: 1,
    email: 'john_appleseed@farms.com',
    password: 'appleseed',
    location: 'Charleston, SC', 
    rating: '4',
    name: 'John Appleseed'
  },
  {
    id: 2, 
    email: 'martha_beetboxer@agriculture.com',
    password: 'beetboxer', 
    location: 'Walterboro, SC', 
    rating: '5',
    name: 'Martha Beetboxer'
  }
]

// // Connect to DB
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
mongoose.Promise = bluebird;
mongoose.connection.on('error', (err) => {
  console.error(`Could not establish connection to MongoDB: ${err.message}`);
});

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.post('/api/login', (req, res) => {
  const fahmah = farmers.filter(farmer =>
    farmer.email === req.body.email && farmer.password === req.body.password
  );
  return fahmah.length ? res.status(200).send(fahmah[0]) : res.status(500).send();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// Initialize the app.
const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});

// CONTACTS API ROUTES BELOW
