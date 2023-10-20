import './App.css'
import Wallet from './components/Wallet'
import Hero from './components/Hero'
import Handles from './components/Handles'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {

  const [state , setState] = useState({
    web3:null,
    contract:null
  });
  const saveState =  (state) => {
    setState(state);
  }
  

  return (
   <div className='background '>
    <Wallet saveState={saveState}/>
    <Hero state = {state}/>
    <Handles/>
    <Projects state={state}/>
    <Skills/>
    <Experience state={state}/>
    <Contact state={state}/>
    <Handles/>
   </div>
  )
}

export default App
