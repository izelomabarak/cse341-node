const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;

app.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log('Connected to DB and Web Server is listening at port ' + port)
  }
})