const express=require('express')
const app=express();
const bodyParser = require('body-parser');
const path=require('path')
const fs=require('fs');


const formRoute=require('./routes/form.js')
const detailRoutes=require('./routes/detail.js')
const errorRoutes=require('./routes/error.js')

app.use(bodyParser.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', detailRoutes);
app.use('/contactus',formRoute);


app.use('',errorRoutes);

app.listen(3000);