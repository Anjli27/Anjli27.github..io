import React from 'react'
import Chat from '../../Components/Chat'
import Sidebar from '../../Components/Sidebar'
import './Home.css'
import img from "../../assets/img.jpg"

function Home() {
  return (
    <div className='home' style={
      { backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
  }}>
        <div className="container">
          
          <Sidebar/>
          <Chat/>
        </div>
    </div>
  )
}

export default Home