import React from 'react'
import Profile from "../assets/profile.jpg"

function NavBar() {
  return (
    <div className='navbar'>
      <span className="logo">Chat Box</span>
      <div className="user">
        <img src={Profile} alt="" />
        <span>Honey</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default NavBar