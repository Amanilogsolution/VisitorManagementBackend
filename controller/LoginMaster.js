const sql =require('mssql')
const sqlConfig = require('../config.js')

const UserLogin = async (req, res) => {
    const uid_id = req.body.uid_id;
    const uid_pass = req.body.uid_pass;
    console.log(uid_id,uid_pass)

    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`select * from Visitor_login where  uid_id='${uid_id}' and uid_pass='${uid_pass}'`)
        console.log(result.recordset[0])
        res.send(result.recordset[0])
    }
    catch(err){
        res.send(err)
        }
}

module.exports ={UserLogin}