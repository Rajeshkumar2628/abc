import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
export default function Material() {
    const[name,setName]=useState()
    const[description,setDescription]=useState()
    const[cost,setCost]=useState()
    const [list, setList] = useState([])
    const navigate = useNavigate()
    const[ac,setAc]=useState(0)
    const auth=useAuth()
    const submit=(e)=>{
        axios.post("http://localhost:3001/material/post",{name,description,cost})
        .then(res=>alert("Data added successfully"))
        .catch(err=>console.log(err));
        e.preventDefault()
    }
    useEffect(() => {
      axios.get('http://localhost:3001/material/get')
          .then(res => setList(res.data))
          .catch(err => console.log(err))
  },[])
  useEffect(()=>{
    const ac1 = list
    .map((x) => x.cost)
    .reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
    setAc(ac1)

    auth.totalAmt2(ac1)
  },[list])
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/employee/delete/${id}`)
          .then(res => {
              console.log(res)
              alert('Deleted Successfully')
          })
          .catch(err => { console.log(err) })
  }
    const handleBack=()=>{
      navigate('/Dashboard')
  }

  return (
    <div>
    <button onClick={handleBack}>GoBack</button>
    <div className='form'>
        <h1>Materials</h1>
        
        <form onSubmit={submit}>
          <table>
            <tr>
              <td><label>Project Name</label></td>
              <td><input type='text' onChange={(x)=>setName(x.target.value)}/></td>
            </tr>
            <tr>
              <td><label>Description</label></td>
              <td><textarea onChange={(x)=>setDescription(x.target.value)}/></td>
            </tr>
            <tr>
              <td><label>Cost/month</label></td>
              <td><input type='number' onChange={(x)=>setCost(x.target.value)}/></td>
            </tr>
            <tr>
              <td colSpan="2"><button type='submit'>submit</button></td>
            </tr>
          </table>
        </form>
        <table className='table1'>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Cost/month</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x => (
                        <tr key={x.id}>
                            <td>{x.name}</td>
                            <td>{x.description}</td>
                            <td>{x.cost}</td>
                            <td>
                                <button onClick={() => handleDelete(x.id)}>Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
    </div>
    <h1>Total Materials:{ac}</h1>
    </div>
  )
}
