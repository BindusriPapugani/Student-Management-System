import axios from 'axios'
import React, { useState } from 'react'

const CreateStudent = () => {

  let [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    mbno: "",
    course: ""
  })

  let handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  let handleSubmit = (e)=>{
    e.preventDefault()
    try{
    axios.post("http://localhost:5000/student" , formData)
    alert("New Student is succesfully added")
    }
    catch(error)
    {
      console.log(error);      
    }
    finally{
      setFormData({
        userName : "",
        userEmail : "",
        mbno : "",
        course : ""
      })
    }
  }
  return (
    <>
      <form action="" className='form' onSubmit={handleSubmit}>
        <h2>Tech Training Institute</h2>
        <p>Enter Student Details</p>
        <div>
          <label htmlFor="">Name : </label>
          <input type="text" name='userName' placeholder='Enter name of the Student' onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Email : </label>
          <input type="text" name='userEmail' placeholder='Enter email ID' onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Mobile No : </label>
          <input type="tel" name='mbno' pattern='[0-9]{10}' placeholder='Enter Mobile Number' onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Course : </label>
          <select name="course" value={formData.course} id="" onChange={handleChange} >
            <option value="" disabled>Select Course</option>
            <option value="Java Full Stack">Java Full Stack</option>
            <option value="Python Full Stack">Python Full Stack</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Software Testing with Java automation">Software Testing with Java automation</option>
            <option value="Software Testing with Python automation">Software Testing with Python automation</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="MERN Stack">MERN Stack</option>
            <option value="Python with Data Science">Python with Data Science</option>
          </select>
        </div>

        <div>
          <input type="submit" id='submit' value={"Add Student"} />
        </div>
      </form></>
  )
}

export default CreateStudent