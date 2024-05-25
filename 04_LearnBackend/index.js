const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); // find static file in public file
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});

app.get("/", function(req, res){
    fs.readdir(`./files/`, function(err, files){
        res.render("index", {files: files});

    })
})

app.listen(3000);