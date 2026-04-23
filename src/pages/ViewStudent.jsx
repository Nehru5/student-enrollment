import React,{useEffect,useState} from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
const ViewStudent = () => {
  const [students, setStudents] = useState([])
  function fetchData(){
    axios.get("http://localhost:3000/students")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <Nav/>
      <center><h1>View Student</h1></center>

      {students.map((x)=>{
          return <div>
            <h3>Name: {x.name}</h3>
            <p><b>Email:</b> {x.email}</p>
            <p><b>Department:</b> {x.department}</p>
            <p><b>Course:</b> {x.course}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
      })}
    </>
  )
}

export default ViewStudent