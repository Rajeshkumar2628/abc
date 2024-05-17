import React, { useContext, useState } from 'react'
const AuthContext=React.createContext()
export default function AuthProvider(props) {
    const[user,setUser]=useState(null)
    const [totalAmount,setTotalAmount]=useState(0)
    const [totalEmpAmount,setTotalEmpAmount]=useState(0)    
    const [totalMatAmount,setTotalMatAmount]=useState(0)
    const login=(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)
    }
    const totalAmt=(amount)=> {
        setTotalAmount(amount)
    }
    const totalAmt1=(amount)=> {
        setTotalEmpAmount(amount)
    }
    const totalAmt2=(amount)=> {
        setTotalMatAmount(amount)
    }

  return (
    <AuthContext.Provider value={{user,login,logout,totalAmt,totalAmt1,totalAmt2,totalAmount,totalEmpAmount,totalMatAmount}}>
        {props.children}
    </AuthContext.Provider>
  )
  }
export const useAuth=()=>{
    return useContext(AuthContext)
}