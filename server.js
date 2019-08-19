var express = require('express');

var app = express();
var router = require('./router.js');

app.use('/', router); // what does this mean? 
// putting into router folder, makes it easier to read


app.listen("8000", () => {
    console.log("server started .....");
})
