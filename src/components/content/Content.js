import React from "react";
import Check from "../../assets/checkImage.jpg";
import "./Content.css";

const Content = () => {
  return (
    <div className="Content flex flex-col h-screen items-center justify-center text-center">
      <h1 className="Content-header text-5xl font-bold">WTF DUDES CRYPTO</h1>
      <p className="Content-paragraph text-5xl leading-tight">
        wtf dudes crypto is a token made for the people who suffered in this
        rough bear market. A lot of you guys probably lost some of your gains
        because of Bitcoin... Like WTF Bitcoin?! Because Bitcoin is fucking us
        we made this token. We as a team are ready to make the market great
        again! We got lots of things prepared so hop in and WTF DUDES this is
        about to get crazy!
      </p>
      <ul className="Content-list flex flex-row justify-around w-full ">
        <li className="Content-list-item md:mr-5">
          <img src={Check} alt="Check" className="Content-check w-auto h-auto" />
          <p className="Content-list-text text-customPurple">Safeteam</p>
        </li>
        <li className="Content-list-item md:mr-5mr-5">
          <img src={Check} alt="Check" className="Content-check w-auto h-auto" />
          <p className="Content-list-text text-customPink">Utility</p>
        </li>
        <li className="Content-list-item mr-5">
          <img src={Check} alt="Check" className="Content-check w-auto h-auto" />
          <p className="Content-list-text text-customOrange">Community</p>
        </li>
      </ul>
    </div>
  );
};

export default Content;
