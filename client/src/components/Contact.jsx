import React, { useEffect, useState } from 'react'

function Contact({state}) {
  const [resume , setResume] = useState(null);
  useEffect(()=>{
      const {contract} = state;
      const loadResume = async() => {
        const re = await contract.methods.resumelink().call();
        
        setResume(re);
      }
      loadResume();
  },[state])
  return ( 
    <div className=' d-flex justify-content-center fw-bold flex-column align-items-center' style={{height:'75vh'}}>
      <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className=' text-decoration-underline mb-5'>INTERESTED ? LET'S GET IN TOUCH ! </h1>
            <a href={`https://gateway.pinata.cloud/ipfs/${resume}`} className='btn btn-primary btn-lg shadow rounded-0 border-0 font-monospace'>View Resume</a>
      </div>
      
    </div>
  )
}

export default Contact 
