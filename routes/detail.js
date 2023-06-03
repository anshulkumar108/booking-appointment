const express=require('express');
const path = require('path');
const routes = express.Router();

routes.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','home.html'));
})

routes.post('/success',(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.Email;
    res.send(`'${name} ,'${email}) "your form successfuly filled" `)
})

module.exports = routes