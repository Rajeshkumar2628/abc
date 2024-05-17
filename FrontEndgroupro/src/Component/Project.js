import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Component/Sidebar.css";
import { useAuth } from './Auth'
import { useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  const [id1, setId1] = useState("");
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [advance, setAdvance] = useState("");
  const [budget, setBudget] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const [name1, setName1] = useState("");
  const [description1, setDescription1] = useState("");
  const [duration1, setDuration1] = useState("");
  const [advance1, setAdvance1] = useState("");
  const [budget1, setBudget1] = useState("");
  const[ac,setAc]=useState(0)
  const auth=useAuth()
  const navigate = useNavigate()
  
  

    const getData=()=>{
      axios
      .get("http://localhost:3001/proj/get")
      .then((res) => {
        setList(res.data)
      })
      .catch((err) => console.log(err));
  
      
    }

    useEffect(()=>{
      const ac1 = list
      .map((x) => x.budget)
      .reduce((a, b) => {
        return Number(a) + Number(b);
      }, 0);
      setAc(ac1)

      auth.totalAmt(ac1)
    },[list])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/proj/post", {
        name,
        description,
        duration,
        budget,
        advance,
      })
      .then(alert("Data added successfully"),getData())
      .catch(err=>console.log(err));
  };
  useEffect(() => {
    getData()
  }, []);
  const openPopup = (data) => {
    setIsPopup(true);
    setId1(data.id);
    setName1(data.name);
    setDescription1(data.description);
    setDuration1(data.duration);
    setAdvance1(data.advance);
    setBudget1(data.budget);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/proj/put/${id1}`, {
        name: name1,
        description: description1,
        duration: duration1,
        advance: advance1,
        budget: budget1,
      })
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/proj/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleBack = () => {
    navigate('/Dashboard')
  }

  return (
    <div className="divs">
      <button onClick={handleBack}>GoBack</button>
      {isPopup && (
        <div className="popup fade-in">
          <form onSubmit={handleUpdate} className="form">
            <button className="close" onClick={() => setIsPopup(false)}>
              X
            </button>
            <h1 className="hh">Update Project Details</h1><br />
            <table>
              <tr>
                <td><label>Name</label></td>
                <td><input type="text" value={name1} onChange={(e) => setName1(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label>Description</label></td>
                <td>
                  <textarea value={description1} onChange={(e) => setDescription1(e.target.value)} /></td>
              </tr>
              <tr>
                <td>{" "}<label>Project Duration</label></td>
                <td><input type="number" value={duration1} onChange={(e) => setDuration1(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label>Budget</label></td>
                <td><input type="number" value={budget1} onChange={(e) => setBudget1(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label>Advance</label></td>
                <td><input type="number" value={advance1} onChange={(e) => setAdvance1(e.target.value)}/></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="submit" className="btn-grad">Update</button></td>
              </tr>
            </table>
          </form>
        </div>
      )}
      <form className="form1" onSubmit={handleSubmit}>
        <h1>Enter Project Details</h1>
        <table>
          <tr>
            <td><label>Name</label></td>
            <td><input type="text" value={name} onChange={(e) => setName(e.target.value)}/></td>
          </tr>
          <tr>
            <td><label>Description</label></td>
            <td><textarea value={description}onChange={(e) => setDescription(e.target.value)}/></td>
          </tr>
          <tr>
            <td><label>Project Duration</label></td>
            <td><input type="number" value={duration} onChange={(e) => setDuration(e.target.value)}/></td>
          </tr>
          <tr>
            <td><label>Budget</label></td>
            <td><input type="number" value={budget} onChange={(e) => setBudget(e.target.value)}/></td>
          </tr>
          <tr>
            <td>
              <label>Advance</label></td>
            <td><input type="number" value={advance} onChange={(e) => setAdvance(e.target.value)}/></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="submit">Add Project</button>
            </td>
          </tr>
        </table>
      </form>

      <table className="table1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Project Duration</th>
            <th>Budget</th>
            <th>Advance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {list.map(x => (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.description}</td>
              <td>{x.duration}</td>
              <td>{x.budget}</td>
              <td>{x.advance}</td>
              <td>
                <button onClick={() => openPopup(x)}>Edit</button>

                <button onClick={() => handleDelete(x.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Total Budget:{ac}</h1>
      {/* <Dashboard value={ac}/> */}
    </div>
  );
}
