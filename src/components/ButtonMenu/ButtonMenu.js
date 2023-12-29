import React from "react";
import "./Button.scss";

function ButtonMenu({ to, title , onClick}) {


  return (
    <>
      <div  className=" buttonMenu"style={{ "--i": 0, "--clr": " #fe00f1" }}>
        
        
            <h2>{title}</h2>
         
        
      </div>
    </>
  );
}

export default ButtonMenu;
