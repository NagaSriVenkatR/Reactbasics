import React, { useState } from 'react'

const Usestate = () => {
  const [color,setColor] = useState("Red");
  const [car,setCar] = useState({
    brand : "KIA",
    Model : "Sonet",
    year  : "2024",
    color :  "Brown",
  })
  const updateColor = () => {
    setCar(prevstate => {
      return({...prevstate,color:"Violet"})
    })
  }
  return (
    <div className='text-center'>
      <h1>My favourite color is {color}</h1>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <h1>My car brand {car.brand}</h1>
      <p>It's model is {car.Model} {car.year} and it's color is {car.color}</p>
      <button type='button' onClick={updateColor}>Violet</button>
    </div>
  );
}

export default Usestate
