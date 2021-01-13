const reportsServices = require('../services/reports')
const security = require('../utils/security')

const getAllReports = async (req, res) => {
    const { data, metadata } = await reportsServices.getAllReports(req.paginations)
    res.send({
        status: 1,
        metadata,
        data,
    })
}

const getReportsById = async (req, res) => {
  
    const { data } = await reportsServices.getReportsById(req.params.id);
    res.send({
        status: 1,
        data,
    })
}
const createReports = async (req, res) => {
    console.log(req.body);
    const { data } = await reportsServices.createReports(req.body)
    res.send({
        data,
        status: 1,
    })
}
const updateReports = async (req, res) => {
    const { id } = req.params;
    await reportsServices.updateReports(id, req.body);
    res.send({
        status: 1,
    })
}
const deleteReports = async (req, res) => {
    const { id } = req.params;
    await reportsServices.deleteReports(id);
    res.send({
        status: 1,
    })
}

module.exports = {
    getAllReports,
    getReportsById,
    createReports,
    updateReports,
    deleteReports,
}
