
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function ButtonMenu(){
    useEffect(() => {
        let toggle = document.querySelector('.toggle');
        let menu = document.querySelector('.menu');
    
        const handleClick = () => {
          menu.classList.toggle('active');
        };
    
        toggle.addEventListener('click', handleClick);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          toggle.removeEventListener('click', handleClick);
        };
      }, []);
return(
    <div className="Animated-Radial-Menu">

    <ul className="menu">
        <div className="toggle"><ion-icon className="add-outline"><h1>Menu</h1></ion-icon></div>
        <li style={{"--i": 0, "--clr":" #fe00f1"}}>
            <Link to="#">
                <ion-icon  name="beer-outline"><h2>The Watcher</h2></ion-icon>
            </Link>
        </li>
        <li style={{"--i": 1.5, "--clr":" #fe00f1"}}>
            <Link to="#">
                <ion-icon name="home-outline"><h2>Argent Bank</h2></ion-icon>
            </Link>
        </li>
        
        <li style={{"--i": -1.5, "--clr":" #fe00f1"}}>
            <Link className="pink" to="/Projet">
                <ion-icon  name="settings-outline"><h2 className="mirror " >77Events</h2></ion-icon>
            </Link>
        </li>
        
     
    </ul>
      <p>loremisp
        
        
    </p>

</div>


)
}

export default ButtonMenu;