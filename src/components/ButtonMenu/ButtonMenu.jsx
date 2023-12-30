import React from "react";
import "./Button.scss";

function ButtonMenu({ to, title, onClick }) {
  return (
    <>
      <div className="buttonMenu">
        <h2>{title}</h2>
      </div>
    </>
  );
}

export default ButtonMenu;
