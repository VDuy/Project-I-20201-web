const Route = require(`express`).Router();

const accountController = require(`../controllers/account`);
const { tryCatch } = require(`../middlewares/errorHandle`);
const pagination = require(`../middlewares/pagination`);

Route.post(`/`, tryCatch
    (accountController.createAccount));

Route.get(`/`, tryCatch
    (accountController.getAllAccount));

Route.get(`/:username`, tryCatch
(accountController.getAccountByUsername));

Route.put(`/:username`, tryCatch
(accountController.updateAccount));

Route.delete(`/:username`, 
tryCatch(accountController.deleteAccount));

module.exports = Route;