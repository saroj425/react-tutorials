import React from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  return (
   <> 
      <div>Products</div>
      <button onClick={()=>navigate(-1)}> Go Back</button>
   </>
  )
}

export default Products