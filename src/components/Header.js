import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

const Header = () => {
  const navStyle = ({isActive})=>{
    return {
      textDecoration : isActive ? "none" : "underline",
      color : isActive ? "red" : "white",
      background : isActive ? "white" : ""
      
    }
  }

  return (
    <div className='header dflex'>
        {/* <h1>Record Keeping</h1> */}
        <NavLink style={navStyle} to={'/'}>Home</NavLink>
        <NavLink style={navStyle} to={'/about'}>About</NavLink>
        <NavLink style={navStyle} to={'/products'}>Products</NavLink>
        <NavLink style={navStyle} to={'/contact'}>Contact</NavLink>
    </div>
)}

export default Header