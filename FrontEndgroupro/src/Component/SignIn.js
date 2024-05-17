import React, {  useState } from 'react'
import axios from 'axios'
import '../App.css';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth';

export default function SignIn() {
    const [email, setEMail] = useState('')
    const [password, setPassword] = useState('')
    const[message,setMessage]=useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()
    const auth = useAuth()
    const check = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:3001/users/get/${email}`)
            .then(res => {
                console.log(res)
                if (res.data[0]?.email) {
                    if (res.data[0]?.password === password) {
                        setMessage('')
                        alert('Login successfull')
                        navigate('/Dashboard')
                        auth.login(res.data[0]?.username)
                    }
                    else {
                        setMessage("Incorrect password")
                    }
                }
                else {
                    setMessage('Email not found')
                }

            })
            .catch(err => console.log(err))
    }

return (
    <div className='abc-in'>
        <form className='bcd-in' onSubmit={check}>
            <h1>Login page</h1>
            <label>Email</label>
            <input type='email' onChange={(e) => {
                setEMail(e.target.value)
            }} /><br></br>
            <label>Password</label>
            <input type='password' onChange={(e) => {
                setPassword(e.target.value)
            }} /><br></br>
            <button className='log' type='submit'>Log in</button>
        </form><br></br>
        {errMsg}
    </div>
)
}

