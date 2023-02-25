const sql =require('mssql')
const sqlConfig = require('../config.js')

const VehicleEntry = async (req, res) => {
    const docNo = req.body.docNo;
    const vehNo = req.body.vehNo;
    const vehType = req.body.vehType;
    const driverName = req.body.driverName;
    const contactNo = req.body.contactNo;
    const remarks = req.body.remarks;
    const wh = req.body.wh;
    const cust = req.body.cust;
    const entry_by = req.body.entry_by;
    const tpt_mode = req.body.tpt_mode;
 
    console.log(docNo,vehNo,vehType,driverName,contactNo,remarks,wh,cust,entry_by,tpt_mode)

    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`insert into NEWAWLDB.dbo.tbl_vehicle_details(docNo,vehNo,vehType,driverName,
            contactNo,remarks,wh,cust,entry_by,entry_on,tpt_mode,MSGFLAG) 
            values('${docNo}','${vehNo}','${vehType}','${driverName}','${contactNo}','${remarks}','${wh}','${cust}','${entry_by}',getdate(),'${tpt_mode}','');
            
            `)
        res.send(result)
    }
    catch(err){
        res.send(err)
        }
}

module.exports ={VehicleEntry}