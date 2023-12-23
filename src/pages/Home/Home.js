import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";


function Home() {
    
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);
  
  
  const handleMenuClick = () => {
    setAreButtonsVisible(!areButtonsVisible);
  };



  return (
    <div>
      <div className={`toggle ${areButtonsVisible ? "active" : ""}`} onClick={handleMenuClick}>
        <ion-icon className="add-outline">
          <h1>Menu</h1>
        </ion-icon>
      </div>
      <div className={`menu-wrapper ${areButtonsVisible ? "active" : ""}`}>
        <ul>
          <ButtonMenu to="#" title="The Watcher" />
       <ButtonMenu to="#" title="Argent Bank"  />
          <Link to="/Projet">  <ButtonMenu title="77Events"/></Link> 
          
        </ul>
       
      </div>
    </div>
  );
}

export default Home;
