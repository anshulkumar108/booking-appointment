const express=require('express')
const app=express();
const bodyParser = require('body-parser');
const path=require('path')
const fs=require('fs');

const ErrorPage=require('./controller/errorcontroller.js')

const formRoute=require('./routes/form.js')
const detailRoutes=require('./routes/detail.js')


app.use(bodyParser.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', detailRoutes);
app.use('/contactus',formRoute);


app.use( ErrorPage.getErrorPage);

app.listen(3000);