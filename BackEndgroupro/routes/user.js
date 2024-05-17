const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const UserModel=require('../model/user-model')

router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send("Users page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newUser=new UserModel(req.body)

    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("users post page")
})

router.get('/get/:email',(req,res)=>{
    console.log(req.params.email)
    UserModel.find({email:req.params.email})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})


module.exports=router