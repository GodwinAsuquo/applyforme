import React from "react";
import hamburger from "../../assets/hamburger.svg";
import logo from "../../assets/logo.svg";
import notification from "../../assets/notification.svg";
import profilePic from "../../assets/profilePic.svg";

const TopNav = () => {
  return (
    <section id="topNav">
      <div className="left">
        <img className="hamburger" src={hamburger} alt="" />
        <img className="logo" src={logo} alt="" />
        <h3>Notifications</h3>
      </div>

      <div className="right">
        <img className="notification" src={notification} alt="" />
        <img src={profilePic} alt="" />
      </div>
    </section>
  );
};

export default TopNav;
