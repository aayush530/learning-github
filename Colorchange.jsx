import React, { useState } from 'react'

const Colorchange = () => {
    const[color , setcolor]=useState("red")
  return (
    <div>
        <h1 style={{color:color}}>  My favoroute color is </h1>
      <button onClick={()=>{setcolor("blue")}}
      >Blue</button>
      <button onClick={()=>{setcolor("red")}}
      >Red</button>
      <button onClick={()=>{setcolor("pink")}}
      >Pink</button>
      <button onClick={()=>{setcolor("green")}}
      >Green</button>
    </div>
  )
}

export default Colorchange
