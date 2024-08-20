import React, { useEffect, useRef, useState } from 'react'

const Userref = () => {
  const [inputValue , setInputValue] = useState("");
  const previousInputValue = useRef("");
  const count = useRef(0);
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  }
  useEffect(() => {
    count.current = count.current + 1;
    previousInputValue.current = inputValue;
  },[inputValue])
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  ref={inputElement}/>
      <h1>Render Count : {count.current}</h1>
      <h1>Previous Value : {previousInputValue.current}</h1>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default Userref
