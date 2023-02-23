import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
   <>
      <div>About</div>
      <button onClick={()=>navigate(-1)}> Go Back</button>
   </>
  )
}

export default About