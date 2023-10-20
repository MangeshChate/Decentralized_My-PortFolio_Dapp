import React, { useEffect, useRef, useState } from 'react'

function Projects({ state }) {


  const [projects, setProjects] = useState([]);
  console.log(projects)
  useEffect(() => {
    const { contract } = state;
    const projectDetails = async () => {
      const projects = await contract.methods.allProjects().call();
      setProjects(projects)
    }
    contract && projectDetails();

  }, [state]);

  const myEth = useRef();

  const donateEth = async (e) => {
    e.preventDefault();
    try {
      const eth = myEth.current.value;
      const { contract, web3 } = state;
      const weiValue = web3.utils.toWei(eth, "ether");
      console.log(weiValue);
      const accounts = await web3.eth.getAccounts();
      await contract.methods.donate().send({ from: accounts[0], value:weiValue, gas:325666});
      alert("Transaction Successfull !");
      

    }catch(err){
      alert("Transaction not successfull !");
      console.log(err)
    }
  }
  return (
    <div className='vh-100 d-flex flex-column align-items-center justify-content-center'>
      <h2 className='font-monospace fw-bold text-decoration-underline mt-5'>PROJECTS</h2>

      <div className="d-flex gap-5 mt-5">

        {projects !== "" && projects.map((project) => (

          <div className="card  shadow-lg rounded-5" style={{ width: "54vh", height: "45vh" }}>
            <div className="card-body ">
              <div className="card-img">
                <a href={`https://github.com/MangeshChate/${project.githubLink}`}>
                  <img src={`https://gateway.pinata.cloud/ipfs/${project.image}`} alt="" className='rounded-5 shadow-lg' style={{ width: "50vh" }} />

                </a>
              </div>
              <div className="card-body  d-flex flex-column align-items-center justify-content-center ">
                <h5 className='fw-bold font-monospace m-3'>{project.name}</h5>
                <span>{project.description}</span>
              </div>
            </div>
          </div>

        ))}


      </div>

      <button className='btn btn-lg  btn-outline-dark rounded-0 shadow-lg  mt-5 font-monospace' data-bs-toggle="modal" data-bs-target="#exampleModal">liked the project's ? Consider denating Eth's</button>

      {/* modal  */}
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form onSubmit={donateEth} className="modal-body">
              <input type="text" className="form-control p-2 rounded-0  border-1" placeholder='Enter the ETH you want to donate!' ref={myEth} />
              <button type="submit" className="btn btn-sm btn-primary shadow rounded-0 border-0 mt-3">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
