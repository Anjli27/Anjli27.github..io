import React from "react";
import Profile from "../assets/profile.jpg";

function Chats() {
  return (
    <div className="chats">
      <div className="userchat">
        <img className="imgs" src={Profile} alt="" />
        <div className="userChatInfo">
          <span className="chatname">Honey</span>
          <p className="textinfo">Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
