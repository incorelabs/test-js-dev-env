var express = require("express");
var path = require("path");
var open = require("open");

var port = 3000;

var app = express();

// Handle the GET route for ROOT at /
app.get("/", function(req, res) {
    console.log(__dirname);
    console.log(__dirname);

    // Path::
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
})
