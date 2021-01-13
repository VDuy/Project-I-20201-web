//const Route = require("./account")
const Route = require('express').Router();
const authController = require('../controllers/auth');

const { requireLogin, requireRole, } = require('../middlewares/auth');

Route.get(`/`,
    requireLogin,
    requireRole('ADMIN'),
    authController.getin
);

Route.post(`/login`, authController.login);

module.exports = Route;