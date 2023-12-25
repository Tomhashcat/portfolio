import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import imgAutor from "../../assets/img/moi.jpg";
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
          <Link to="/BankPage">
            <ButtonMenu title="Argent Bank" />
          </Link>
          <Link to="/Events">
            <ButtonMenu title="77Events" />
          </Link>
        </ul> 
        <img className={`Autor ${areButtonsVisible ? 'active' : ''}`} src={imgAutor} alt="Autor" />
        <article className="About">
       
          <h3>About me :</h3>
         
        <p>
            Passionné par le monde numérique, je suis un ancien professionnel de la vente dans l'industrie du luxe qui a embrassé la révolution technologique en devenant développeur front-end. Mon parcours dans le luxe m'a inculqué une sensibilité esthétique et un engagement envers l'excellence, des valeurs que je m'efforce d'incorporer dans chaque ligne de code que je rédige. Mon objectif est de créer des expériences utilisateur élégantes et fonctionnelles, où le design rencontre la performance. je suis constamment en quête d'apprentissage et d'exploration de nouvelles technologies pour rester à la pointe du développement front-end. Mon approche du codage est orientée vers la création d'interfaces utilisateur intuitives, réactives et esthétiquement plaisantes.
          </p>
          
        </article>
      </div>
    </div>
  );
}

export default Home;
