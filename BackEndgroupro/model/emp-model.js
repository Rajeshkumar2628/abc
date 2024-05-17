const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    age:Number, 
    email:String, 
    mobno:Number, 
    salary:Number 
})

const UserModel=mongoose.model('EmpData',userSchema)

module.exports=UserModel