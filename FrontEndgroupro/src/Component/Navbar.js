import React from 'react'
import '../App.css';
import img2 from './images-removebg-preview.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export default function Navbar(props) {
    const auth=useAuth()
    const navigate = useNavigate()
    return (
        <>
            <div className='main-nav'>
                <div>
                    <img src={img2} style={{ height: '100px' }} alt='no' />
                </div>
                <div className='content1 sedan-sc-regular'>
                    <NavLink to='/'><div>Home</div></NavLink>
                    {!auth.user &&<NavLink to='/about'><div>About</div></NavLink>}
                    {!auth.user &&<NavLink to='/service'><div>Services</div></NavLink>}   
                    {auth.user && <NavLink to='/project'><div>Projects</div></NavLink>} 
                    {auth.user && <NavLink to='/materials'><div>Materials</div></NavLink>} 
                    {auth.user && <NavLink to='/employee'><div>Employees</div></NavLink>}
                </div>
                <div className='content2'>

                {!auth.user && <NavLink to='signin'><button className='merriweather-light'>Log in</button>
                </NavLink>}
                {!auth.user && <NavLink to='signup'><button className='merriweather-light'>Register</button></NavLink>} 
                
                {auth.user && <NavLink to='/'><div><button className='merriweather-light' onClick={()=>{auth.logout();navigate('/')}}>Logout</button></div> </NavLink>}  
                </div>
            </div>
        </>
    )
}
