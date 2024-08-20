import React, { createContext, useContext, useState } from 'react'
const UserContent = createContext();
const Usercontent = () => {
  const [user,setUser] = useState("Jessie Hall");
  return (
    <div>
      <h1>Hello  {user}!</h1>
      <Usercontent1 user={user}/> 
    </div>
  )
}
function Usercontent1({user}) {
  return(
    <div>
      <h1>Hello user2 {user} again!</h1>
      <Usercontent2 user={user} />
    </div>
  )
}
function Usercontent2({user}) {
  return(
    <div>
      <h1>Hello user3 {user} again!</h1>
      <Usercontent3 user={user} />
    </div>
  )
}
function Usercontent3({ user }) {
  return (
    <div>
      <h1>Hello user4 {user} again!</h1>
      <Usercontent4 user={user} />
    </div>
  );
}
function Usercontent4() {
  const  user = useContext(UserContent);
  return (
    <div>
      <h1>Hello user5 {user} again!</h1>
      
    </div>
  );
}

export default Usercontent
