import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
