import React from "react";
import rightsideimg from "../../assets/img/rightsideimg.png";

const RightMessagingPanel = () => {
  return (
    <div className="rightside">
      <div className="imgrightside">
        <img src={rightsideimg} alt="" />
        <h2>Kate Jefferson</h2>
        <p>Parent</p>
      </div>
      <div className="desc">
        <p>
          Last Status: <span>Applicant (New)</span>
        </p>
        <p>
          Telephone: <span>905 627 8173</span>
        </p>
        <p>
          Email: <span>jasminethomp@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default RightMessagingPanel;
