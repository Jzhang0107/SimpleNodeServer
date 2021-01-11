const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err)
//     {
//         throw err;
//     }
//     console.log("Folder created at", path.join(__dirname, '/test'));
// })

// create and write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "hello world. ", (err) => {
//     if(err)
//     {
//         throw err;
//     }
//     console.log("File written to");

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "Node.js is cool", (err) => {
//         if(err)
//         {
//             throw err;
//         }
//         console.log("File appended to");
//     })
// })

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), "utf8", (err, data) => {
    if(err)
    {
        throw err;
    }
    console.log("File read.", data);
})