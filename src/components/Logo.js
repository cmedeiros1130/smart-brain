import React from "react";
import { Tilt } from "react-tilt";
import brain from "./icons8-brain-100.png";

const Logo = () => {
  return (
    <div className="logo-div">
      <Tilt
        className="tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 150 }}
      >
        <div className="inner-tilt">
          <img className="brain-logo" src={brain}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
