import React from 'react'

const Navbar = () => {
  const menuItems = [
    {
      "name": "Search",
      "url": "/"
    },
    {
      "name": "Add restaurant",
      "url": "/add"
    },
    {
      "name": "About us",
      "url": "/"
    },
  ]


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {
              menuItems.map((item, i) => {
                return (
                  <li key={i}><a href={item.url}>{item.name}</a></li>
                )
              })
            }
          </ul>
        </div>
        <a href='/' className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            menuItems.map((item, idx) => {
              return (
                <li key={idx}><a href={item.url}>{item.name}</a></li>
              )
            })
          }
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <button className="btn btn-outline btn-secondary">Register</button>
        <button className="btn btn-outline btn-accent">Login</button>
      </div>
    </div>
  )
}

export default Navbar