const express = require('express')   // express module import 

const PORT = 3000;  // port 

const app = express()  // create a express server object 
// no need for the callback function 


// two api's 
app.get('/home/get' , (request , response) =>{
    response.send('hi there , from get method')
});

app.post('/home/get' , (request , response) =>{
    // response.send('hi there , from post method')
    // // or 

    response.json({
        name : "Osheen Jain",
        Age : 20
    })
});

app.listen(PORT , () => {
    console.log(`Express app is listening on port ${PORT}`);
})


