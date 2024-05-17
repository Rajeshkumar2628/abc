import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export default function RequiredAuth(props) {
    const auth=useAuth()
  return (
    <>
    {auth.user?<>{props.children}</>:<Navigate to='/main'/>
    }
    <button>click</button>
    </>
  )
}
