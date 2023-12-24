import React from "react";
import "./Button.scss";

function ButtonMenu({ to, title , onClick}) {


  return (
    <>
      <li style={{ "--i": 0, "--clr": " #fe00f1" }}>
        
          <ion-icon name="beer-outline">
            <h2>{title}</h2>
          </ion-icon>
        
      </li>
    </>
  );
}

export default ButtonMenu;
