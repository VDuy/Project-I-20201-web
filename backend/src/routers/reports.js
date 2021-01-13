const Route = require('express').Router();
const reportsController = require('../controllers/reports')
const { tryCatch } = require('../middlewares/errorHandle')
const pagination = require(`../middlewares/pagination`);


Route.get('/',
    tryCatch(reportsController.getAllReports))
Route.get('/:id',
    tryCatch(reportsController.getReportsById))
Route.post('/',
    tryCatch(reportsController.createReports))
Route.put('/:id',
    tryCatch(reportsController.updateReports))
Route.delete('/:id',
    tryCatch(reportsController.deleteReports))

module.exports = Route