const http = require("http");
const { url } = require("inspector");

const port = 3000;

const server = http.createServer(async (req , res)=>{

    if(req.url==="/home/json-data"){
        const data={
            name : "Osheen Jain",
            Age : 20,
            City : "Delhi"
        }

        res.writeHead(200,{
            'Content-Type' : 'application/json'
        })

        res.end(JSON.stringify(data))
    }
    else{
        res.writeHead(404)
        res.end("Page Not Found")
    }
})

server.listen(port , ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})


