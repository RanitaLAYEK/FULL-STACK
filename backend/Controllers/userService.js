const employees=require('../Model/userSchema');


async function findUsers(){
    return employees.find({}).lean().exec();
}

async function findUserById(id){
    return employees.findOne({_id:id}).exec();
}

async function findUserByEmployeeId(employeeID){
    return employees.findOne({employeeID:employeeID}).exec();
}

async function createUser(payload){
    return employees.create(payload);
}

async function updateUser(id,body){
    return employees.findOneAndUpdate({_id:id},{$set:body});
}

async function deleteUser(id){
    return employees.findOneAndDelete({_id:id});
}
exports.findUsers=findUsers;
exports.findUserById=findUserById;
exports.createUser=createUser;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;
exports.findUserByEmployeeId=findUserByEmployeeId;