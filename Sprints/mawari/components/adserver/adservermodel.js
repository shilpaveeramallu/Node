let mongoose = require('mongoose');

var adServerSchema = new mongoose.Schema({
    Id:{
        type:Number,
    },
fileName:{
    type:string,
},
fileType:{
    type:string,
},

fileExtension:{
    type:string,
},
filePath:{
 type:string,   
},
fileCategory:{
    type:string,
},
author:{
    type:string,
},
createdDate:{
    type:Date,
},
createdBy:{
    type:string,
},
updatedDate:{
    type:date,
},
updatedBy:{
    type:string,
}, 
});

var collectionName = 'Ad_Server';
var Ad_Server  = mongoose.model('Ad_Server', adServerSchema, collectionName);

module.exports = Ad_Server;