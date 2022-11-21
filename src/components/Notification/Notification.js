import React from "react";
import settings from "../../assets/settings.svg";
import cancel from "../../assets/cancel.svg";
import message from "../../assets/message.svg";
import chevronRight from "../../assets/chevronRight.svg";

const Notification = () => {
  return (
    <section className="notifications">
      <div className="header">
        <h2>Notifications</h2>
        <img src={settings} alt="" />
      </div>

      <div className="alert">
        <p className="unread">unread</p>
        <img className="cancel" src={cancel} alt="" />
        <div className="message">
          <img src={message} alt="" />
          <p>Message</p>
        </div>

        <div className="line"></div>

        <p>You have a new message from a potential employer</p>
        <p>14 hours ago</p>
        <p>Backend Engineer</p>
        <p>Xytech systems.</p>
        <p>Lagos, NG</p>
        <button>
          <p>Go to message</p>
          <img src={chevronRight} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Notification;
