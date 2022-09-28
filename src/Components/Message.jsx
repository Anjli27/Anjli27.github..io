import React from 'react'
import Profile from '../assets/profile.jpg'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img className="msgimg" src={Profile} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p className='hello'>Hello</p>
        {/* <img src={Profile} alt="" /> */}
      </div>

    </div>
  )
}

export default Message