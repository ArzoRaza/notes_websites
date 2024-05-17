const fs = require('fs');

fs.rmdir("./expFolder", {recursive: true},(err) => {
    if(err) console.error(err.message);
    else console.log("Process Done")
})