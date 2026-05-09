import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navBar'>
        <NavLink to={"/"}>Add New Student</NavLink>
        <NavLink to={"/read_delete"}>View Student details</NavLink>
    </div>
  )
}

export default Nav