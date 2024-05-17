const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name: String,
    description: String,
    duration: Number,
    advance: Number,
    budget: Number
})

const UserModel=mongoose.model('ProjData',userSchema)

module.exports=UserModel