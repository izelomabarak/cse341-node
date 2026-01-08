const routes = require('express').Router();
const prove = require('../controllers/');

routes.get('/', prove.displayprove);

module.exports = routes;