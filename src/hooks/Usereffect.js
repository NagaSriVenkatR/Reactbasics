import React, { useEffect, useState } from 'react'

const Usereffect = () => {
  const [count,setCount] = useState(0);
  const [calculation,setCalculation] = useState(0);
  useEffect( () => {
    let timer = setTimeout(() => {
      setCount((cou) => cou + 1);
    }, 1000);
    return () => clearTimeout(timer);
  },[])
  useEffect( () => {
    setCalculation(() => count * 2 );
  },[count])
  
  return (
    <div>
      <h1>It's rendered {count} times!</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}> + </button>
      <p>Calculation : {calculation}</p>
    </div>
  )
}

export default Usereffect

