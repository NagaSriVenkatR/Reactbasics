import React, { useReducer } from 'react'

function Userreducer() {
  const initialState = 0;
  const reducer = (state , action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      case "reset":
        return 0;
      default:
        throw new Error("Unexpected Action");
    }
  }
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div style={{textAlign : "center"}}>
      <h2>{count}</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => dispatch("add")} style={{padding:"20px" , backgroundColor : "blue"}}>add</button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => dispatch("subtract")}>subtract</button>
      </div>
      <div>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    </div>
  );
}

export default Userreducer
