const http = require('http');   // requires the http module 
const fs = require('fs');
// using the createserver function we can actually create http server using the http module 
// returns server onject and takes callback as an argument 

const port = 3000;  

// localhost will make my machine as server for me 

const server = http.createServer(function listener(request , response){
    // using the request arg -> details of incoming https request 
    // response -> we will be to configure what response to be send 
    // this callback it is listener function that will collect every request that will we create for our server 

    // Todo..
    
    if(request.url==='/home'){
        // if we make a requat on /home this if block will execute 
        console.log(request.method);
        // // to send data in multiple chunks use response.write 
        // response.write("first hi\n")
        // response.write("second hi\n")
        // write end to complete the data to know that the data end 
        
        // using writeHead to specify the status code of the website 

        response.end("Welcome to the world of node js home.") // can send only string type data in the response.end() method if send other like json object it will give an error 
        
    }
    console.log("Request Recieved");
    // console.log("Incoming data:" , request);
    // console.log("Response data:" , response);

})

server.listen(port,function exec(){   // port and callback 
    // once server created on given port the callback will be executed 
    
    console.log('sever is is up and running on port:',port); 
});

// localhost:3000 or 127.0.0.1 is a standard address for ipv4 loopback traffic 
// or the address site so that we user can see or read it 





// ******* example 
// post request using the fetch api 

/*
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
*/

