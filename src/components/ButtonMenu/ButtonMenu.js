import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function ButtonMenu({ to, title , onClick}) {


  return (
    <>
      <li style={{ "--i": 0, "--clr": " #fe00f1" }}>
        <Link to="#">
          <ion-icon name="beer-outline">
            <h2>{title}</h2>
          </ion-icon>
        </Link>
      </li>
    </>
  );
}

export default ButtonMenu;
