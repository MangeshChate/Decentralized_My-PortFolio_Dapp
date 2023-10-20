import React, { useEffect, useState } from 'react'
import { DateRange } from '@mui/icons-material';
function Experience({state}) {

  const [education , setEducation] = useState([]);
  const [experience , setExperience] = useState([]);
  useEffect(()=>{
    const {contract} = state;
    const educationDetails = async() =>{ 
      const education = await contract.methods.allEducation().call();
      const experience = await contract.methods.allExperience().call();

      setEducation(education);
      setExperience(experience);
      
    }
    educationDetails();
  },[state])  


  return (
    <div className='vh-100 d-flex flex-column align-items-center'>
      <h2 className='font-monospace fw-bold text-decoration-underline mt-5'>EXPERIENCE & EDUCATION</h2>
      <div className="row row-cols-2 mt-5  justify-content-between d-flex">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 className='font-monospace text-center'>Education</h2>

          {/* cards */}
          <div className='gap-5 d-flex flex-column'>
            {education.map((edu)=>(

            <div className="card bg-light p-2 shadow rounded-5" style={{ width: "50vh" }}>
              <div className="card-body">
                <div className='d-flex align-items-center gap-2'>
                  <DateRange />
                  <span>{edu.date}</span>
                </div>
                <h3 className='text-primary fw-bold'>{edu.degree}</h3>
                <p className=''>{edu.knowledgeAcquired}</p>
                <span>{edu.instutionName}</span>
              </div>
            </div>
            ))}


          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 className='font-monospace text-center'>EXPERIENCE</h2>

          {/* cards */}
          <div className='gap-5 d-flex flex-column'>
            
            {experience.map((exp)=> (

            <div className="card  bg-light p-2 shadow rounded-5" style={{ width: "50vh" }}>
              <div className="card-body">
                <div className='d-flex align-items-center gap-2'>
                  <DateRange />
                  <span>{exp.date}</span>
                </div>
                <h3 className='text-primary fw-bold'>{exp.position}</h3>
                <p className=''>{exp.knowledgeAcquired}</p>
                <span>{exp.instutionName}</span>
              </div>
            </div>
            ))}


        
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
