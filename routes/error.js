const express =require('express');
const path = require('path');
const routes = express.Router();
const ErrorPage=require('../controller/controllers.js')

routes.get('/',ErrorPage.getErrorPage)

module.exports = routes