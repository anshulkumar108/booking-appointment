const express=require('express');
const path = require('path');
const routes = express.Router();

const homePage=require('../controller/controllers')

routes.get('/',homePage.getHomePage)

routes.post('/success',homePage.postHomePage)

module.exports = routes