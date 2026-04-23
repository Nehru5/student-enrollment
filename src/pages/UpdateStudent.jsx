import React,{useState} from 'react'

const UpdateStudent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")

  return (
    <>
      <center><h1>Update student</h1></center>
      <center>
        <form action="">
          <input
          type="text"
          placeholder='Enter Name'
          required value={name} 
          onChange={(e)=>{setName(e.target.value)}} /> <br />

          <input 
          type="text" 
          placeholder='Enter Email'  
          required value={email} 
          onChange={(e)=>{setEmail(e.target.value)}}/> <br />

          <input 
          type="text" 
          placeholder='Enter Department' 
          required 
          value={department} 
          onChange={(e)=>{setDepartment(e.target.value)}} /> <br />

          <input 
          type="text" 
          placeholder='Enter Course' 
          required value={course} 
          onChange={(e)=>{setCourse(e.target.value)}} /> <br />
          
           <button>Update</button>
        </form>
      </center>
    </>
  )
}

export default UpdateStudent