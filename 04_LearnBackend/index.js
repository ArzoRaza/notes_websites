const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("It's running Arzo ");
});

app.listen(3000, function(){
    console.log("it's running");
});