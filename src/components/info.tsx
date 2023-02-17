import React from "react";
import { Icon } from "@iconify/react";

export default function Info() {
  return (
    <div className="info-container">
      <img src="../src/images/Picture_Placeholder.png" alt="" />
      <h2>Niclas Broberg</h2>
      <h4 className="title">Frontend Developer</h4>
      <div className="buttons">
        <a href="mailto: niclas-92@live.se">
          <button className="email-btn">
            <Icon
              icon="mdi:email"
              width="16px"
              height="16px"
              className="email-icon"
            />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/niclas-broberg-a6b079251/">
          <button className="linkedin-btn">
            <Icon
              icon="mdi:linkedin"
              width="16px"
              height="16px"
              className="linkedin-icon"
            />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
