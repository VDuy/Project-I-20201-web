const accountService = require('../services/account');
const security = require('../utils/security')

const getAllAccount = async (req, res) => {
  const { data, metadata } = await accountService.getAllAccount(req.pagination)
  res.send({
    status: 1,
    metadata,
    data
  })
}

const getAccountByUsername = async (req, res) => {

  const { data } = await accountService.getAccountByUsername(req.params.username);
  res.send({
    data,
    status: 1
  })
};

const createAccount = async (req, res) => {
  const newAccount = {
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone,
    role: req.body.role,
  }
  if (!newAccount.username || !newAccount.password) {
    res.status(400).send({
      status: 0,
      message: 'Username or password is empty!'
    })
  }
  const data = await accountService.createAccount(newAccount);
  if (data.status === 0) {
    res.status(400).send({
      status: 0,
      message: 'Account existed!'
    })
  }
  res.status(400).send({
    status: 1,
    message: 'Account created!'
  })
}

const updateAccount = async (req, res) => {
  const { username } = req.params;
  await accountService.updateAccount(username, req.body)
  res.send({
    message: "updated",
    status: 1,
  })
}
const deleteAccount = async (req, res) => {
  const { username } = req.params;
  await accountService.deleteAccount(username)
  res.send({
    status: 1,// true - 1, false 0
  })
}
module.exports = {
  createAccount,
  getAllAccount,
  getAccountByUsername,
  updateAccount,
  deleteAccount

}