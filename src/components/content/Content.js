import React from "react";
import "./Content.css"; // Import the CSS file
import Check from "../../assets/checkImage.jpg";

const Content = () => {
  return (
    <div className="Content flex flex-col items-center justify-center text-center">
      <h1 className="Content-header text-5xl font-bold">WTF DUDES CRYPTO</h1>
      <p className="Content-paragraph text-5xl leading-tight w-1/2">
        wtf dudes crypto is a token made for the people who suffered in this
        rough bear market. A lot of you guys probably lost some of your gains
        because of Bitcoin... Like WTF Bitcoin?! Because Bitcoin is fucking us
        we made this token. We as a team are ready to make the market great
        again! We got lots of things prepared so hop in and WTF DUDES this is
        about to get crazy!
      </p>
      <ul className="Content-list flex flex-row justify-center items-center">
        <li className="Content-list-item mr-5">
          <img src={Check} alt="Check" className="Content-check w-auto h-auto" />
          <p className="Content-list-text text-5xl">Safe team</p>
        </li>
        <li className="Content-list-item mr-5">
          <img src={Check} alt="Check" className="Content-check w-auto h-auto" />
          <p className="Content-list-text text-5xl">Utility</p>
        </li>
        <li className="Content-list-item mr-5">
          <img src={Check} alt="Check" className="Content-check w-auto h-auto" />
          <p className="Content-list-text text-5xl">Community</p>
        </li>
      </ul>
    </div>
  );
};

export default Content;
