import React, { useState } from "react";

import Auth from "./hooks/Auth";
import AuthContext from "./hooks/Authcontext";
import Userreducer from "./hooks/Userreducer";
import Userref from "./hooks/Userref";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./Router/Home";
// import About from "./Router/About";
// import Contact from "./Router/Contact";
// import Usercontext from "./hooks/Usercontext";
function App() {
  const [authstatus , setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
    // <div>
    //   <Usercontext />
    // </div>
    <React.Fragment>
      <AuthContext.Provider value={{status: authstatus , login : login}}>
        <Auth />
        <Userref />
        <Userreducer />
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
