const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongodb = require('./db/connect');
const MongoClient = require('mongodb').MongoClient;
const routes = require('./routes/index')

const port = process.env.PORT || 8080;

// app.use('/', require('./routes'));

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
}) 
app.use('/professional', routes)

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log('Connected to DB and Web Server is listening at port ' + port);
  }
});