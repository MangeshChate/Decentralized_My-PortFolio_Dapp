import React, { useEffect, useState } from 'react'

function Hero({state}) {
  
  const [description , setDescription] = useState("");
  const [image , setImage] = useState("");
  useEffect(()=>{
      const {contract} = state;
      const description = async() =>{
          const descriptionText = await contract.methods.description().call();
          const imageText = await contract.methods.imageLink().call();
          setDescription(descriptionText);
          setImage(imageText); 
      }
      contract && description(); 
  },[state])

 

  return (
    <div className='  d-flex flex-column justify-content-center  align-items-center' style={{height:"75vh"}}>
      <div className="row row-cols-2   w-75">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column gap-4 justify-content-center ">
            <p className='font-monospace'><span className='text-primary fw-bold fs-3'>Mangesh Chate</span> is a Full-Stack Blockchain Developer From India</p>
            <h1 className='fw-bolder '>I Develop decentralised apps in web3 space.</h1>
            <span className='font-monospace'>{description}</span>
            <button className="btn btn-lg btn-primary shadow border-0 rounded-5">Get Touch</button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
            <img src={`https://gateway.pinata.cloud/ipfs/${image}`} className="shadow-lg" alt="" style={{borderRadius:"50%", width:"55vh"}}/>
          </div>

      </div>
    </div>
  )
}

export default Hero
