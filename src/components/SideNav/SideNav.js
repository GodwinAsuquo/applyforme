import React from "react";
import whiteLogo from "../../assets/whiteLogo.svg";
import jobprofileLarge from "../../assets/jobprofileLarge.svg";
import dashboardLarge from "../../assets/dashboardLarge.png";
import applicationsLarge from "../../assets/applicationsLarge.png";
import helpLarge from "../../assets/helpLarge.png";
import signoutLarge from "../../assets/signoutLarge.png";

const SideNav = () => {
  return (
    <aside className="sideNav">
      <div>
        <img className="whiteLogo" src={whiteLogo} alt="" />
      </div>

      <div className="middle">
        <div>
          <img src={dashboardLarge} alt="" />
          <p>Dashboard</p>
        </div>
        <div>
          <img src={jobprofileLarge} alt="" />
          <p>My Job Profile</p>
        </div>
        <div>
          <img src={applicationsLarge} alt="" />
          <p>Applications</p>
        </div>
      </div>

      <div className="bottom">
        <div>
          <img src={helpLarge} alt="" />
          <p>Help</p>
        </div>
        <div>
          <img src={signoutLarge} alt="" />
          <p>Signout</p>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
