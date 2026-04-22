import React,{useState} from 'react'
import Nav from '../components/Nav'
import axios from "axios"
import { toast } from 'react-toastify'
const AddStudent = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")

  function saveData(e){
      e.preventDefault()
      let studentData = {name,email,department,course}
      axios.post("http://localhost:3000/students",studentData)
      .then(()=>{
        setName("")
        setEmail("")
        setDepartment("")
        setCourse("")
        toast.success("Student Added")
      })
      .catch(err=>console.log(err))
  }
  return (
    <>
      <Nav/>
      <center><h1>Add Student</h1></center>
      <center>
        <form action="" onSubmit={saveData}>
          <input
           type="text" 
           placeholder='Enter Name' 
           required 
           value={name} 
           onChange={(e)=>{setName(e.target.value)}} /> <br />

          <input 
          type="text" 
          placeholder='Enter Email' 
          required 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}/> <br />

          <input 
          type="text" 
          placeholder='Enter Department' 
          required 
          value={department}
          onChange={(e)=>{setDepartment(e.target.value)}}/> <br />

          <input 
          type="text" 
          placeholder='Enter Course' 
          required 
          value={course}
          onChange={(e)=>{setCourse(e.target.value)}}/> <br />
          <button>Add Student</button>
        </form>
      </center>
    </>
  )
}

export default AddStudent