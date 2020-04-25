const express = require('express');

const routes = express.Router()

const controller = require('../Controller')

routes.get('/news',controller.getNews);
routes.get('/feature',controller.getFeature)
routes.get('/subfeature',controller.getSubFeature);


module.exports = routes;