//access files

const fileSystem = require("fs/promises");
//fileSystem.writeFile("First.txt","I am the hype!!!");
//fileSystem.unlink("second.txt")
//fileSystem.appendFile("First.txt"," ~ Vegeta")
//fileSystem.mkdir("akhil") //create folder
//fileSystem.rmdir("akhil") 

//os
const operatingSystem = require("os");
//console.log(operatingSystem.platform());
//console.log(operatingSystem.arch());

//env

//console.log(process.env);

//create server

const http = require("http");
http.createServer((request,response)  => {
    console.log(request.headers);
    response.end("Hello! Akhil");
}).listen(3252);