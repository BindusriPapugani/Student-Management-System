import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Outlet></Outlet></>
  )
}

export default Layout