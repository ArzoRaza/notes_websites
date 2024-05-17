const fs = require('fs');

// writeFile 
fs.writeFile("firstFile.txt", "Hello bhaiyo kaise how agar aap file check kar rahe ho to main bata du ki isme kuch bhi aisa khas baat nhi likha hua h to apko janna chahiye", function(err){
    if(err) console.error(err.message);
    else console.log("Process has been complited!!")
} )


// fs.rmdir("./expFolder", {recursive: true},(err) => {
//     if(err) console.error(err.message);
//     else console.log("Process Done")
// })