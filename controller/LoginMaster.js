const sql =require('mssql')
const sqlConfig = require('../config.js')

const UserLogin = async (req, res) => {
    const uid_id = req.body.uid_id;
    const uid_pass = req.body.uid_pass;
    console.log(uid_id, uid_pass)
    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`select * from Visitor_login where  uid_id='${uid_id}' and uid_pass='${uid_pass}'`)
        const token = jwt.sign({ uid_id, uid_pass }, process.env.JWT_KEY, { expiresIn: 5 * 24 * 60 * 60 })
        console.log(result)
        res.status(200).send({
            status: "Success",
            token: token,
            result: result.recordset[0].uid_id,
            result2: result.recordset[0].uname,
            result3: result.recordset[0].wh,
            result4: result.recordset[0].whid,
            expiresIn: 5 * 24 * 60 * 60
        })    }
    catch(err){
        res.send(err)
        }
}

module.exports ={UserLogin}