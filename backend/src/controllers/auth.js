const authService = require('../services/auth')
const accountService = require('../services/account');
const { requireLogin } = require('../middlewares/auth');

const login = async (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password

    };
    const result = await authService.login(user);
    if (result) {
        res.send({
            status: 1,
            message: 'result',
            token: result
        })
    } else {

        next(`Đăng nhập thất bại`);
    }

};
const getin = async (req, res, next) => {
    const user = await accountService.getUserByUsername(req.username);
    res.send(user);
}
const refreshToken = async (req, res, next) => {
    const oldRefreshToken = req.body.refreshToken
    const oldToken = req.body.token
    const result = await authService.refreshToken({
        oldRefreshToken, oldToken
    })
    if (result) res.send(result);
    else next(errors.UNAUTHORIZED)
}
module.exports = {
    login,
    getin,
    refreshToken,
};
