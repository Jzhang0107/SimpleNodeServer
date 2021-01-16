const http = require('http');

http.createServer((request, response) => {
    response.write("Server response");
    response.end();
}).listen(5000, () => console.log("Server running"))