const express = require('express');
const router = express.Router();

const usercontroller = require('../../controller/userController');
router.get('/',function(req,res){
    console.log("user request");
})
router.post('/new',function(req,res)
{
    usercontroller.create(req,res);
})
module.exports = router;