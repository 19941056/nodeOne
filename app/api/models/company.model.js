const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CompanySchema=new Schema({
    name:{type:String,require:true},
    description:{type:String,required:true},
    music:[{type:Schema.Types.ObjectId,ref:'music', required:true}]
})
const Company=mongoose.model('company', CompanySchema);
module.exports = Company;