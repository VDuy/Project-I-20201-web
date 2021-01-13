const db = require('../utils/db')
const security = require('../utils/security')

const createReports = async (newReports) => {
    const encryptedPassword = await security.generatePassword(newReports.name);
    const sql =
        `INSERT INTO reports (id, name, phone, createdate, birthday)
        VALUE (?,?,?,?,?);`
    const params = [newReports.id, newReports.name, newReports.phone, newReports.createdate, newReports.birthday];
    await db.query(sql, params);
    return {
        status: 1,
        message: "Reports created!"
    };

}

const getAllReports = async () => {
    const sql =
        `SELECT id, name, phone, createdate, birthday 
        FROM reports
        WHERE isDelete = 0;`
    const data = await db.queryMulti(sql);

    return {
        data,
        metadata: {
            length: data.length,

        },
    };
};

const getReportsById = async (id) => {
    const sql = `
    SELECT id, name, phone, createdate, birthday
    FROM reports
    WHERE isDelete = 0 AND id = ?;`

    const data = await db.queryOne(sql, [id]);
    return {
        data,
    }
}
const updateReports = async (
    id, data) => {
    const sql = `
UPDATE reports
SET name = ?,
phone = ?,
createdate = ?,
birthday = ?,
WHERE id = ?;`;
   await db.query(sql, [data.birthday, id]);
    return {
        status: 1,
        message: `Update thành công!`,
    };
};

const deleteReports = async (id) => {
    const sql = `
    UPDATE reports
    SET
    isDelete = 1
    WHERE id = ?;`;
    const data = await db.query(sql, [id]);
    return {
        data
    }
}

module.exports = {
    getAllReports,
    getReportsById,
    createReports,
    updateReports,
    deleteReports,
}