const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    description:String,
    cost:Number
})

const UserModel=mongoose.model('MaterialsData',userSchema)

module.exports=UserModel