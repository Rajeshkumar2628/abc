const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const UserModel=mongoose.model('UserDatas',userSchema)

module.exports=UserModel