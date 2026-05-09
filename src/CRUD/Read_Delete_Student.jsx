import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read_Delete_Student = () => {
  let [data, setData] = useState([])

  let sno = 1
  let fetchData = async () => {
    let { data } = await axios.get("http://localhost:5000/student")
    setData(data)
  }

  useEffect(() => {
    try {
      fetchData()
    }
    catch (error) {
      console.log(error);
    }
  }, [])

  let handleDelete = async (id)=>{
    await axios.delete(`http://localhost:5000/student/${id}`)
    fetchData()    
  }

  return (
    <>
      <table className='table' border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(val => {
              return (
                <Fragment key={val.id}>
                  <tr>
                    <td>{sno++}</td>
                    <td>{val.userName}</td>
                    <td>{val.userEmail}</td>
                    <td>{val.mbno}</td>
                    <td>{val.course}</td>
                    <td>
                      <button className='upd'><Link to={`/update/${val.id}`}>Update</Link></button>
                      <button className='del' onClick={()=>handleDelete(val.id)}>Delete</button>
                    </td>

                  </tr>
                </Fragment>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Read_Delete_Student