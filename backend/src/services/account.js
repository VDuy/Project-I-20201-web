const db = require('../utils/db')
const security = require('../utils/security')

const createAccount = async (newAccount) => {
  const encryptedPassword = await security.generatePassword(newAccount.password);
  const sql =
    `INSERT INTO account ( username, password, phone, role) VALUE (?,?,?,?);`
  const params = [newAccount.username, newAccount.password, newAccount.phone, newAccount.role];
  await db.query(sql, params);
  return {
    status: 1,
    message: "Account created!"
  };

}
const getAllAccount = async () => {
  const sql =
    `SELECT username, password, phone, role, created_at, updated_at
                  FROM account
                  WHERE isDelete = 0
               `;


  const data = await db.queryMulti(sql)

  return {
    data,
    metadata: {
      length: data.length,

    },
  };
};

const getAccountByUsername = async (username) => {
  const sql =
    `SELECT username, password, phone, role
   FROM account 
   WHERE isDelete = 0 AND username = ?;  
  `;

  const data = await db.queryOne(sql, [username]);
  return {
    data,
  };
};

const updateAccount = async (username, data) => {
  const sql = ` UPDATE account
                SET password = ?, phone = ?, role = ?
                WHERE username = ? AND isDelete = 0; `;

  await db.query(sql, [
    username,
    data.password,
    data.phone,
    data.role,
  ]);
  return {
    status: 1,
    message: `Update thành công!`,
  };
};

const deleteAccount = async (username) => {
  const sql = `UPDATE account
                  SET isDelete = 1
                  WHERE username = ?;`;
  await db.query(sql, [username]);
  return {
    status: 1,
    message: `Xoá thành công!`,
  };
}

module.exports = {
  getAllAccount,
  getAccountByUsername,
  createAccount,
  updateAccount,
  deleteAccount,

}