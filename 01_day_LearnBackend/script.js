const fs = require('fs');

// ******************************* writeFile 
/*
fs.writeFile("firstFile.txt", "Hello bhaiyo kaise how agar aap file check kar rahe ho to main bata du ki isme kuch bhi aisa khas baat nhi likha hua h to apko janna chahiye", function(err){
    if(err) console.error(err.message);
    else console.log("Process has been complited!!")
} )
*/

// ******************************* appendFile
/*
fs.appendFile("firstFile.txt", "(These Text appended: abcdefchijklmnopqrstuvwxyz)", function(err){
    if(err) console.error(err.message);
    else console.log("Process has been complited!!")
} )
*/


// *******************************  rename
/*
fs.rename("firstFile.txt", "secondFile.txt", function(err){
    if(err) console.error(err.message);
    else console.log("Process has been complited!!")
} )
*/

// ******************************  copyfile
/*
fs.copyFile("secondFile.txt", "basanti_Biography.txt", function(err){
    if(err) console.error(err.message);
    else console.log("Process has been complited!!")
} )
*/

// ***************************** unlink
/*
fs.unlink("secondFile.txt", function(err){
    if(err) console.error(err.message);
    else console.log("Process has been complited!!")
} )
*/


// fs.rmdir("./expFolder", {recursive: true},(err) => {
//     if(err) console.error(err.message);
//     else console.log("Process Done")
// })