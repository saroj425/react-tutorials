import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <div className='header dflex'>
        {/* <h1>Record Keeping</h1> */}
        <p ><Link style={{cursor:"pointer",color:"#fff",textDecoration:"none"}} to={'/'}>Home</Link></p>
        <p ><Link style={{cursor:"pointer",color:"#fff",textDecoration:"none"}} to={'/about'}>About</Link></p>
        <p ><Link style={{cursor:"pointer",color:"#fff",textDecoration:"none"}} to={'/products'}>Products</Link></p>
    </div>
)}

export default Header