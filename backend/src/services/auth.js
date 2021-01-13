const db = require('../utils/db');
const security = require('../utils/security');

const login = async (user) => {
    const getUserSQL = `
    SELECT username, password FROM account WHERE username = ?;
    `;
    const result = await db.queryOne(getUserSQL, [user.username]);
    console.log("result", result)
    // const compare = await security.verifyPassword(
    //     user.password === result.password
    // );

    const compare = user.password === result.password;
    if (compare) {
        console.log(user);
        return security.generateToken({
            username: result.username,
           // role: result.role,
        //   password: result.password
        });

    } else {
        return false;
    }
};

module.exports = { login }