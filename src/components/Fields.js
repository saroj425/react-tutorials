import { Button ,Stack} from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Fields = ({name,email,index,data1}) => {
    console.log("dlsfsd;flfksk;f",data1)

    const removeData = async()=>{
        data1.splice(index,1)
        console.log(data1)
      }
  return (
        <div className='data-val'>            
                <h4>{name}</h4>
                <h4>{email}</h4>
                <Stack>
                    <Button  variant='contained' color='error'>
                        <DeleteForeverIcon/>
                    </Button>
                </Stack>
        </div>
  )
}

export default Fields