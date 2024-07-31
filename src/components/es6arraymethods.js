import React from 'react'
import ReactDOM from 'react-dom/client'
const myArray = ['banana','apple','orange'];
const myList = myArray.map((item)=> <p>{item}</p>)
const container = document.getElementById('root');
const root =ReactDOM.CreateRoot(container);
root.render(myList);
export default es6arraymethods
