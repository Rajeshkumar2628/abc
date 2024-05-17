import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Component/Mainpage.css'
export default function MainPage() {
  return (
    <div className='main'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/project'>Projects</NavLink>
      <NavLink to='/materials'>Materials</NavLink>
      <NavLink to='/employee'>Employee</NavLink>
    </div>
  )
}
