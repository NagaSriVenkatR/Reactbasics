// import React, { useEffect, useRef, useState } from 'react'

// const Userref = () => {
//   const [inputValue , setInputValue] = useState("");
//   const previousInputValue = useRef("");
//   const count = useRef(0);
//   const inputElement = useRef();
//   const focusInput = () => {
//     inputElement.current.focus();
//   }
//   useEffect(() => {
//     count.current = count.current + 1;
//     previousInputValue.current = inputValue;
//   },[inputValue])
//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  ref={inputElement}/>
//       <h1>Render Count : {count.current}</h1>
//       <h1>Previous Value : {previousInputValue.current}</h1>
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   )
// }

// export default Userref

import React, { Fragment, useRef} from 'react'

function Userref() {
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ducimus officia deserunt optio, tenetur commodi sint repellendus maiores sapiente veniam tempora numquam laborum blanditiis alias, voluptates aut assumenda fuga? Optio?";
    focusPoint.current.focus();
  };
  return (
    <Fragment>
      <div style={{marginTop:"50px",backgroundColor :"violet"}}>
        <div>
          <button onClick={onClickHandler}>ACTION</button>
        </div>
        <label>
          Click on the action button to focus and populate the text.
        </label>
        <br />
        <textarea ref={focusPoint} />
      </div>
    </Fragment>
  ); 
}

export default Userref
