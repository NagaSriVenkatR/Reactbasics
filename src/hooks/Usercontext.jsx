import React, { createContext, useContext, useState } from 'react'

function Usercontext() {
  const Usercontext = createContext();
  function Component1() {
    const [user,setUser] = useState("JessieHall");
    return (
      <Usercontext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </Usercontext.Provider>
    )
  }

function Component2() {
  return(
    <div>
      <h1>Hello Component 2</h1>
      <Component3 />
    </div>
  )
}
function Component3() {
  return (
    <div>
      <h1>Hello Component 3</h1>
      <Component4 />
    </div>
  )
}  
function Component4() {
  return (
    <div>
      <h1>Hello Component 4</h1>
      <Component5 />
    </div>
  )
}
function Component5() {
  const user = useContext(Usercontext);
  return(
    <div>
      <h1>Hello Component 5</h1>
      <h2>{`Hello ${user} Again !`}</h2>
    </div>
  )
}

return (
    <div>
      <Component1 />
    </div>
  )
}

export default Usercontext
