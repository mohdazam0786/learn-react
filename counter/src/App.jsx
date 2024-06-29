import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [counter,setCounter]=useState(0)
let increase = ()=>{
  if(counter<20){
    setCounter(counter+1)
  }
  
}
let decrease = ()=>{
  if(counter>0){
    setCounter(counter-1)
  }
  
}

  return (
    <>
      <h1>Hello! this is counter</h1>
      <h2>counter: {counter}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
