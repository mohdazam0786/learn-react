import { useState } from "react";
import "./App.css";

function App() {
  const [color,setcolor]=useState("olive");
  return (
    
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="grid place-items-center">
          <button onClick={()=>{setcolor("red")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >red</button>
          <button onClick={()=>{setcolor("blue")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >blue</button>
          <button onClick={()=>{setcolor("green")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >green</button>
        </div>
      </div>
      
  )
}

export default App;
