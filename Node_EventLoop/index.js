const fs= require("fs");

console.log("File read start");
fs.readFile("./name.txt", "utf8", function(err, data) {
    if (err) throw err;
   console.log("Result \n",data)
});

console.log("File is reading....");