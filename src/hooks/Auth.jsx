import React, { useContext } from 'react'
import AuthContext from './Authcontext';


function Auth() {
  const auth = useContext(AuthContext);
  console.log(auth.status);
  return (
    <div>
      <h1>Are you authenticated ?</h1>
      {auth.status ? <p>Yes you are</p> : <p>Nopes</p>}
      <button onClick={auth.login}>Click To Login</button>
    </div>
  )
}

export default Auth

