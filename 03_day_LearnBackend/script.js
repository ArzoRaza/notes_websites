const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log("Chala re chala mai piya ke ghar !!");
    next();
});

app.use(function(req, res, next){
    console.log("you have to do super hard work ");
    next();
})

app.get('/', function(req, res){
    res.send("Akbar kaisa chal raha hai padhai");
})

app.get("/about", function(req, res, next){
    return next(new Error("Error again"))
})

app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send("kuch to kharabi chal raha h pith piche ?? ")
})

app.listen(3000);
