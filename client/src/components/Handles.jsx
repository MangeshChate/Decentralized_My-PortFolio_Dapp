import React from 'react'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
function Handles() {
  return (
    
    <div className='container '>
      <hr />
      <div className='d-flex justify-content-around  align-items-center'>

       
        <LinkedIn className='fs-1 text-primary '/>
        
        
          <Twitter className='text-primary fs-1'/>
    
        
          <GitHub className='fs-1 text-dark'/>
       


      </div>
      <hr />
    </div>
  )
}

export default Handles
