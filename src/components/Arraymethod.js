import React from 'react'
import ReactDOM from 'react-dom/client'

const Arraymethod = () => {
  const myarray = ["banana", "apple", "orange"];
  const mylist = myarray.map((item)=><p>{item}</p>);
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(mylist);
  return (
    <div>
      
    </div>
  )
}

export default Arraymethod
