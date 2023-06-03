const express=require('express')
const app=express();
const bodyParser = require('body-parser');
const path=require('path')
const fs=require('fs');


const formRoute=require('./routes/form.js')
const detailRoutes=require('./routes/detail.js')

app.use(bodyParser.urlencoded({extended:false}));

app.use('/', detailRoutes);
app.use('/contactus',formRoute);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);