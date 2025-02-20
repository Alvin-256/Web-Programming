const express = require('express');
const app = express();
const port = 8001;


function requestlogger(req,res,next){
    console.log(`Request method:${req.method}, URL:${res.url}`);
    next();
}

app.use(requestlogger);

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)


});