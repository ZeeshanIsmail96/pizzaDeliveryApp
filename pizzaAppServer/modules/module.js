var express = require("express");
var router = express.Router();
var user_records = require('./api/pizzaApp/userlogin');
var order_records = require('./api/pizzaApp/resorders');
var admin_record= require('./api/pizzaApp/adminlogin');

router.post('/adduser',user_records.addData);
router.get('/getuser',user_records.getData);
router.delete('/deleteuser/:id',user_records.deleteData);
router.delete('/updateuser/:id',user_records.updateData);

router.post('/addorder',order_records.addData);
router.get('/getorder',order_records.getData);
router.delete('/deleteorder/:id',order_records.deleteData);
router.put('/updateorder/:id',order_records.updateData);

router.post('/addadmin',admin_record.addData);
router.get('/getadmin',admin_record.getData);
// router.delete('/deleteorder/:id',admin_record.deleteData);
// router.put('/updateorder/:id',admin_record.updateData);


module.exports = router;
