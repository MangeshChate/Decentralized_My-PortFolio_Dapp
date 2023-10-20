import React, { useEffect, useState } from 'react'
import ABI from './ABI.json';
import Web3 from "web3";

function Wallet({saveState}) {

  const [connected , setConnected] = useState(true);

  const init = async() => {
    try{
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({method:'eth_requestAccounts'});

      const contract = new web3.eth.Contract(
        ABI,
        "0x311BDa67cD89fDD9B79ee70E7e277a1cF1cd0f60"
      );
      setConnected(false);
      saveState({web3:web3 , contract:contract});
    }catch(err){
      alert('Please Install Metamask !')
    }
  }


  return (
    <div className='container-fluid p-3 d-flex justify-content-end '>
      <button className="btn btn-primary btn-lg shadow border-0 font-monospace rounded-0 " disabled={!connected} onClick={init}>
        {connected ? "Connect Metamask" : "Connected"}
      </button>
    </div>
  )
}

export default Wallet

