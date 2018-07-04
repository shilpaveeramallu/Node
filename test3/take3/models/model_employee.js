let mongoose = require('mongoose');
let validators = require('mongoose-validators');
let uniquevalidator = require('mongoose-unique-validator');


var employeeSchema = new mongoose.Schema(

    {
        FirstName :{type:String},
        LastName:{type:String},
        Email:{type:String},
        Password:{type:String},
    }
);
 var collectionName = 'Employee';
 var employees = mongoose.model('Employee',employeeSchema,collectionName);
 module.exports= employees;