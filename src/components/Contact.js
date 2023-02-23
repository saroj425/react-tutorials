import { Link } from '@mui/material';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigation = useNavigate();
  return (
    <div>
        <div>Contact</div>
        <Link to={"facebook"}><h4>Facebook</h4></Link>
        <Link to={"google"}><h4>Goolge</h4></Link>
        <Link to={"insta"}><h4>Instagram</h4></Link>
        <Outlet/>
        <button onClick={()=>navigation(-1)}> Go Back</button>
    </div>
  )
}

export default Contact