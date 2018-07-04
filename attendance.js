var moment = require('moment')
var startDate = moment('2013-5-11 8:73:18', 'YYYY-M-DD HH:mm:ss')
var endDate = moment('2013-5-11 10:73:18', 'YYYY-M-DD HH:mm:ss')
var secondsDiff = endDate.diff(startDate, 'seconds')
console.log(secondsDiff)

var attendanceSchema = new  mongoose.Schema({
    employeename: { type: String, required: true },
    // address:{type:String,required:true},
    // dateofjoin:{type:Date,required:true},
    position :{type:String,required:true},
    firstlogin:{type:Date},
    lastlogin: { type: Date }
  
});

function calculateDays(startDate,endDate)
{
   var start_date = moment(startDate, 'YYYY-MM-DD HH:mm:ss');
   var end_date = moment(endDate, 'YYYY-MM-DD HH:mm:ss');
   var duration = moment.duration(end_date.diff(start_date));
   var days = duration.asDays();       
   return days;
}