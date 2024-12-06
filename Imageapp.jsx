import React, { useState } from 'react'

const Imageapp = () => {
    const[image, setimage]=useState("img")
  return (
    <div>
     <img src='image/wolf-katerina-lb.jpeg'></img>
      <button onClick={()=>{setimage("")}}
      >Rotate</button>
      <button onClick={()=>{setimage()}}
      >IncreaeWidth</button>
      <button onClick={()=>{setimage()}}
      >Increasehight</button>
    </div>
  )
}

export default Imageapp
