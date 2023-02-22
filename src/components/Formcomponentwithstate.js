import { Box,Button,Stack } from '@mui/material'
import TextField  from "@mui/material/TextField"
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import Fields from './Fields';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Formcomponentwithstate = () => {
    const [form,setForm] = useState({});
//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
  const [data1,setData] = useState([]);

  const addData = ()=>{
    setData([...data1, form])
    setForm(form)
  }
  
  const removeData = async(index)=>{
    let arr = data1;
    arr.splice(index,1)
    setData([...arr])
  }

  const handlePress = (e)=>{
    if(e.key=='Enter'){
      addData();
    }
    console.log(e.key);
  }
  // console.log("Name====",name);
  // console.log("Name====",email);
  return (
    <div>
        <div className='form'>
          <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="Name" value = {form.name} variant='outlined' onKeyPress={(e)=>handlePress(e)} onChange={(e)=>setForm({...form,name:e.target.value})} />
            <TextField id="outlined-basic" label="Email" value={form.email} variant='outlined' onKeyPress={(e)=>handlePress(e)} onChange={(e)=>setForm({...form,email:e.target.value})} /> 
            <Button variant="outlined" color='primary' draggable onDrag={()=>console.log("Button Dragged...")} onClick={addData}>Add<AddIcon/></Button>               
          </Stack>
        </div>
        <div className='data-div'>
          <div className='data-val'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {
            data1.map((data,index)=>{
              return(
                // <Fields key={index} name={data.name} email={data.email} index={index}/>
                <div className='data-val' key={index}>            
                    <h4>{data.name}</h4>
                    <h4>{data.email}</h4>
                    <Stack>
                        <Button onClick={()=>removeData(index)} variant='contained' color='error'>
                            <DeleteForeverIcon/>
                        </Button>
                    </Stack>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Formcomponentwithstate