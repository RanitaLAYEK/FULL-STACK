var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp');
 
var EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    // SrNo:{
    //     type:String,
    //     //required:true
    // } ,
    reportingManager:{
        type:String,
        ////required:true
    },
    technicalLead:{
        type:String,
        //required:true
    },
//     resourceStatus:{
//         type:String,
//         //required:true
//     },
//     gender:{
//         type:String,
//         //required:true
//     },
    employeeID:{
        type:String,
        required:true
    },
//     globalID:{
//         type:Number,
//         //required:true
//     },
//     skill:{
//         type:String,
//         //required:true
//     },
//     technology:{
//         type:String,
//         //required:true
//     },
//     bU:{
//         type:String,
//         //required:true
//     },
//     resourceType:{
//         type:String,
//         //required:true
//     } ,
//     grade:{
//         type:String,
//         //required:true
//     },
//     pyramid:{
//         type:String,
//         //required:true
//     } ,
//     baseLocation:{
//         type:String,
//         //required:true
//     },
//     anchorLocation:{
//         type:String,
//         //required:true
//     },
//     sSOID:{
//         type:String,
//         //required:true
//     },CGemail:{
//         type:String,
//         //required:true
//     },aXAEmail:{
//         type:String,
//         //required:true 
//     } ,
// CGstartDate:{
//     type:String,
//     //required:true 
// },
// aXAStartDate:{
//     type:String,
//     //required:true 
// },
// aXAbillingDate:{
//     type:String,
//     //required:true 
// },
// aXAContractRenewal:{
//     type:String,
//     //required:true 
// },
// planViewSetup:{
//     type:String,
//     //required:true 
// } ,
// currentSquad:{
//     type:String,
//     //required:true 
// }
// ,address:{
//     type:String,
//     //required:true 
// },
// phoneNumber:{
//     type:String,
//     //required:true 
// },
// alternatePhoneNumber:{
//     type:String,
//     //required:true 
// },
// userID:{
//     type:String,
//     //required:true 
// },
// project_code:{
//     type:String,
//     //required:true 
// },
// remoteDesktop:{
//     type:String,
//     //required:true 
// },
// onboardingTickets:{
//     type:String,
//     //required:true 
// },
// offboardingTickets:{
//     type:String,
//     //required:true 
// },
// releaseDate:{
//     type:String,
//     //required:true 
// },
// resigned:{
//     type:String,
//     //required:true 
// },
// comment:{
//     type:String,
//     //required:true 
// },
   
});
 
module.exports = mongoose.model(
    'employees', EmployeeSchema, 'employees');