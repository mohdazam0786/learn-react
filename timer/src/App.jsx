import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

const [count,setcount]=useState(0)
useEffect(()=>{
  let timer = setTimeout(()=>{
    setcount(count+1)
  },3000)
  return () => clearTimeout(timer)
},[])
  return (
    <>
      <h1>Azam's timer</h1>
      <h3>{count}</h3>
    </>
  )
}

export default App
