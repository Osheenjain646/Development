// writing the html code data to the website or on browser 

const http = require('http');        // for ttp server 
const fs = require('fs').promises;   // for file reading using promise 

const port = 3000;  // port number 

const server = http.createServer(async (req, res) => {   // created a server and using a async function to read file and print their data 

    if (req.url === '/home') {

        try {  // using try catch block to read the file data 
            const data = await fs.readFile('home.html');

            res.writeHead(200, { 'Content-Type': 'text/html' });    // specify the status code and the type of the content to be get written 
            res.end(data);

        } catch (error) {
            res.writeHead(500);
            res.end("File not found");
        }

    } else {        // if there is no such path exists for the browser 
        res.writeHead(404);
        res.end("Page not found");
    }

});

server.listen(port, () => {   // server is listened at specified port 
    console.log(`Server running at http://localhost:${port}`);
});