let express = require('express');
let mongoose = require('mongoose');
let session = require('express-session');
let ObjectId = require('mongodb').ObjectId;
let multer  = require('multer');
let AdServer = mongoose.model('Ad_Server');
var router = express.Router();


module.exports='Praneeth Vadloori';

router.get('/getMemberLists', (req, res, next) =>{
    AdServer.find((err, memberLists) =>{
        if(err){
            return res.json({success:0,message: "Some error occurred while retrieving AdServer."});
        }else{
            res.status(200).json({success:0,data:memberLists});
        }
    });
});

