import React from 'react'
import Profile from '../assets/profile.jpg'

function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input className="searchinput" type="text" placeholder='find a user'/>
        </div>
        <div className="userchat">
            <img className="imgs" src={Profile} alt="" />
            <div className="userChatInfo">
                <span>Honey</span>
            </div>
        </div>
    </div>
  )
}

export default Search