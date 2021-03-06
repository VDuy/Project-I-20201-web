const db = require('../utils/db');
const security = require('../utils/security')

const requireLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = require('../utils/security').verifyToken(token);
        console.log(decodedToken);
        req.username = decodedToken.username;
        req.role = decodedToken.role;
        next();
    } catch (error) {
        next('Falure to accuracy') // xác thực thất bại // 401
    }

}

const requireRole = function (role) {
    const middleWare = async function (req, res, next) {
        if (req.role == role) {
            next();
        } else {
            next('Không được cấp quyền') //403
        }
    }
    return middleWare;
}


module.exports = {
    requireLogin,
    requireRole,
}  