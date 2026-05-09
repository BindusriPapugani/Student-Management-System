import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStudent = () => {

  let id1 = useParams()
  let navigate = useNavigate()
  let [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    mbno: "",
    course: ""
  })

  let fetchData = async () => {
    let { data } = await axios.get("http://localhost:5000/student")
    let updated = data.find(val => val.id == id1.id)
    setFormData(updated)
  }

  useEffect(() => {
    try {
      fetchData()
    }
    catch (error) {
      console.log(error);
    }
  }, [])

  let handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:5000/student/${id1.id}`, formData)
      navigate("/read_delete")
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setFormData({
        userName: "",
        userEmail: "",
        mbno: "",
        course: ""
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
          <input type="text" name='userName' value={formData.userName} placeholder='Enter name of the Student' onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Email : </label>
          <input type="text" name='userEmail' value={formData.userEmail}  placeholder='Enter email ID' onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Mobile No : </label>
          <input type="tel" name='mbno' value={formData.mbno}  placeholder='Enter Mobile Number' onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Course : </label>
          <select name="course" value={formData.course} id="" onChange={handleChange} >
            <option value="" selected disabled>Select Course</option>
            <option value="Java Full Stack">Java Full Stack</option>
            <option value="Python Full Stack">Python Full Stack</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Software Testing with Java automation">Software Testing with Java automation</option>
            <option value="Software Testing with Python automation">Software Testing with Python automation</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="MERN Stack">MERN Stack</option>
            <option value="MERN Stack">Python with Data Science</option>
          </select>
        </div>

        <div>
          <input type="submit" id='submit' value={"Update Student"} />
        </div>
      </form></>
  )
}

export default UpdateStudent