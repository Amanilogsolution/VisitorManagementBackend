const express = require('express');
const router = express.Router();

const GeneratorController = require('../controller/GeneratorMaster')
const DieselController = require('../controller/DieselMaster')
const VisiterController = require('../controller/VisiterMaster')
const LoginController = require('../controller/LoginMaster')
const WarehouseController = require('../controller/WarehouseMaster')
const EmployeeController = require('../controller/Employdetails')
const VehicleController = require('../controller/VehicleEntry')
const FileUpload = require('../controller/FileUpload')
const Multer = require('../Middleware/multer')




router.post('/generatorentry',GeneratorController.GeneratorEntry)
router.post('/dieselentry',DieselController.DieselEntry)
router.post('/visiterentry',VisiterController.VisiterEntry)
router.post('/loginuser',LoginController.UserLogin)
router.post('/warehousecheckopen',WarehouseController.Warehousecheckopen)
router.post('/warehouseopen',WarehouseController.Warehouseopen)
router.post('/warehouseclose',WarehouseController.Warehouseclose)
router.post('/warehouseLastclose',WarehouseController.WarehouseLastclose)


router.post('/employeeDetails',EmployeeController.EmployeeAlerts)
router.post('/allemployee',EmployeeController.Allemployee)
router.post('/vehicleentry',VehicleController.VehicleEntry)

router.post('/FileUpload',Multer,FileUpload)


module.exports= router
