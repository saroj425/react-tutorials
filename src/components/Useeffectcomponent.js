import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import '../App.css'



const Useeffectcomponent = () => {
  const [data1,setData1] = useState();

  const alert = async()=>{
    alert("Alert fired on On Load Event");
  }
  useEffect(()=>{    
      const getData = async()=>{
         const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=10&select=title,price`);
        // const data = fetch(`https://dummyjson.com/products?limit=10&skip=10&select=title,price`)
        // .then(res => res.json())
        // .then(console.log);
        //const result = await res.json();
        console.table("Result=====",res.data);
        setData1(res.data.products);
      }
      getData();
      document.title = `All Product data`
  },[])
  console.log("datakhkhhkhhkjhkjhjk",data1)
  return (
    <div onLoad={alert()}>
      {
        data1 && data1.map((resdata,index)=>(
          <div>              
              {
                data1 && data1.map((resdata,index)=>{
                  return(
                    <div className='dflex' key={index}>
                    <h4>{resdata.id}</h4>
                    <h4>{resdata.price}</h4>
                    <h4>{resdata.title}</h4>
                  </div>
                  )
                  })
              }                
          </div>
        ))
      }
    </div>
  )
}

export default Useeffectcomponent