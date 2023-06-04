const express=require('express');
const path = require('path');
const routes = express.Router();
const FormPage=require('../controller/controllers.js')

routes.get('/',FormPage.getFormPage)
module.exports = routes