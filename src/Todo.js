import React from 'react'

const Todo = ({todo}) => {
  console.log("Child Render");
  return (
    <div>
      <h2>My Todos</h2>
      {todo.map((todo,index)=>{
        return <p key={index}>{todo}</p>
      })}
    </div>
  )
}

export default Todo
