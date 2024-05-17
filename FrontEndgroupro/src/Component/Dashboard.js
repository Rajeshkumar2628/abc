import React from 'react'
import { useAuth } from './Auth'

export default function Dashboard() {
  const auth=useAuth()
  return (
    <div>
      <h1>Dashboard page</h1>
      <h3>Welcome {auth.user}</h3>
      <div>
        <h1>Project Total Amount</h1>
        <h3>{auth.totalAmount}</h3>
      </div>
      <div>
        <h1>Total Employee Salary</h1>
        <h3>{auth.totalEmpAmount}</h3>
      </div>
      <div>
        <h1>Total Materials Cost</h1>
        <h3>{auth.totalMatAmount}</h3>
      </div>
    </div>
  )
}
