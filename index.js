// Load Express
const express=require('express');
// Load Path Get 
const path=require('path');

// Make Server In Port 
const port =9000;

// Express Function 
const app=express();

// View Engine And Ejs 
app.set('view engine','ejs');
// Join The Path 
app.set('views',path.join('views'));

// Request And Responce From Index Ejs  File 
app.get ('/',(req,res)=>{
        return res.render('index');
});

// Listen The Server To Start Server
app.listen(port,(error)=>{
    if(error)
    {
        console.log("Your Server Not Start");
        return false;
    }
    console.log("Your Server Is Start"+port);
});