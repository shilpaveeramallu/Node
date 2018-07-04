let express = require('express');
let mongoose = require('mongoose');
let session = require('express-session');
let ObjectId = require('mongodb').ObjectId;
let multer  = require('multer');
let employee = mongoose.model('modelEmployee');
// let Members = mongoose.model('Members');
// let AccountMember_Ship = mongoose.model('AccountMember_Ship');
// let AccountSubscription_Settings = mongoose.model('AccountSubscription_Settings');
var router = express.Router();

router.post('/createemployee', (req, res, next) =>{ 
    
    
    employee.create({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Email:req.body.Email,
        Password:req.body.Password,
      
    }, (err, memberRegisterData) =>{
        if(err){
            return res.status(404).json({success:0,message:"Error occurred while creating the Member.  "
        +err.message})
        }          
        
    });
});


router.get('/getemployees', (req, res, next) =>{
    employee.find((err, memberLists) =>{
        if(err){
            return res.json({success:0,message: "Some error occurred while retrieving members."});
        }else{
            res.status(200).json({success:0,data:memberLists});
        }
    });
});

router.get('/getemployeeByEmail/:email', (req, res, next) =>{
    employee.findOne({Email:req.params.email}, (err, memberDetailByEmail) =>{
        if(err){
            return res.status(404).json({success:0,message:"Error occurred while rettrieving member detial"})
        }
        if(!memberDetailByEmail || memberDetailByEmail == ""){
            return res.status(200).json({success:0,message: "member not found with this email id " + req.params.email});
        }
        res.status(200).json({success:1,data:memberDetailByEmail});
    });
});


router.get('/getemployeeProfileById/:member_id', (req, res, next) =>{
    employee.findById({_id:ObjectId(req.params.member_id)}, (err, memberDetailById) =>{
        if(err){
            if(err.kind === 'ObjectId'){
                return res.status(404).json({success:0,message: "Member not found with id.  Please check the id " + req.params.member_id});
            }
            return res.status(404).json({success:0,message: "Error while retrieving member detail with this id " + req.params.member_id});
        }
        if(!memberDetailById || memberDetailById == ""){
            return res.status(500).json({success:0,message: "member not found with this id. Please check the id " + req.params.member_id});
        }
        res.status(200).json({success:1,data:memberDetailById})
    });
});

router.put('/updateEmployeeProfileById/:member_id', (req, res, next) =>{
    employee.findById({_id:ObjectId(req.params.member_id)}, (err, updateMemberDetailById) =>{
        if(err){
            if(err.kind === 'ObjectId'){
                return res.status(404).json({success:0,message: "Member not found with id.  Please check the id " + req.params.member_id});
            }
            return res.status(404).json({success:0,message: "Error while retrieving member detail with this id " + req.params.member_id});
        }
        if(!updateMemberDetailById || updateMemberDetailById == ""){
            return res.status(500).json({success:0,message: "member not found with this id. Please check the id " + req.params.member_id});
        }
        updateMemberDetailById = setUpdatedMemberDetails(req, updateMemberDetailById);
        
        updateMemberDetailById.save((err, updateMemberDetailObj) =>{
            if(err){
                res.status(500).json({success:0,Error:err});
            }
            res.status(200).json({success:1,data:updateMemberDetailObj});
        });
       
    });
});


router.put('/updateEmployeeByEmail/:email', (req, res, next) =>{
    employee.findOne({Email:req.params.email}, (err, updateMemberDetailByEmail) =>{
        if(err){
            return res.status(404).json({success:0,message:"Error occurred while rettrieving member detial"})
        }
        if(!updateMemberDetailByEmail || updateMemberDetailByEmail == ""){
            return res.status(500).json({success:0,message: "member not found with this email id " + req.params.email});
        }
        updateMemberDetailByEmail = setUpdatedMemberDetails(req, updateMemberDetailByEmail);
        updateMemberDetailByEmail.save((err, updateMemberDetailObj) =>{
            if(err){
                res.status(500).json({success:0,Error:err});
            }
            res.status(200).json({success:1,data:updateMemberDetailObj});
        });

    });
});

function setUpdatedMemberDetails(req, memberObj){
    memberObj.MobileNumber = req.body.MobileNumber;
    memberObj.IsMobileVerified = req.body.IsMobileVerified;
    memberObj.IsEmailVerified = req.body.IsEmailVerified;
    memberObj.FirstName = req.body.FirstName;
    memberObj.LastName = req.body.LastName;
    memberObj.MiddleName = req.body.MiddleName;
    memberObj.DOB = req.body.DOB;
    memberObj.Gender = req.body.Gender;
    memberObj.Industry = req.body.Industry;
    memberObj.Profession = req.body.Profession;
    memberObj.AddressLine1 = req.body.AddressLine1;
    memberObj.AddressLine2 = req.body.AddressLine2;
    memberObj.City = req.body.City;
    memberObj.State = req.body.State;
    memberObj.ZipCode = req.body.ZipCode;
    memberObj.Country = req.body.Country;
    memberObj.CompanyName = req.body.CompanyName;
    memberObj.CompanyAddressLine1 = req.body.CompanyAddressLine1;
    memberObj.CompanyAddressLine2 = req.body.CompanyAddressLine2;
    memberObj.CompanyCity = req.body.CompanyCity;
    memberObj.CompanyCountry = req.body.CompanyCountry;
    memberObj.AlternatePhoneNumber = req.body.AlternatePhoneNumber;
    memberObj.BloodGroup = req.body.BloodGroup;
    memberObj.FamilyType = req.body.FamilyType;
    memberObj.TimeZone = req.body.TimeZone;
    memberObj.Hobbies = req.body.Hobbies;
    memberObj.MaritalStatus = req.body.MaritalStatus;
    memberObj.MemberStatus = req.body.MemberStatus;
    return memberObj
}

module.exports = router;


