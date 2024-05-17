import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const[name,setName]=useState('')
    const[mail,setMail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=()=>{
        axios.post(`http://localhost:3001/users/post`,{username:name,password:password,email:mail})
        .then(navigate('/Dashboard'))
        .catch(err=>alert('error'))
        
    }
  return (
    <div className='abc-up'>
        <form className='bcd-up' onSubmit={handleSubmit}>
            <h1>Sign up page</h1>
            <label>Username</label>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}/><br></br>
            <label>Email</label>
            <input type='email'onChange={(e)=>{setMail(e.target.value)}}/><br></br>
            <label>Password</label>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
            <button type='submit'>Sign up</button>
        </form>
    </div>
  )
}
