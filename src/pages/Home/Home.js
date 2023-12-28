import React from "react";

import "./Home.scss";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import EventsPage from "../Projects/Events/events";
import SeparationBarre from "../../components/Separation/SeparationBarre";
import BankPage from "../Bank/Bank";

function Home() {
  return (
    <>
      <h1>Thomas Dutourné</h1>
      <h2>Personal portfolio for web developper</h2>
      <h3>Modern and créative</h3>

      <SeparationBarre />

      <div className="intro">
        <section className="about-me">
          <article className="About">
            <h4>About me :</h4>

            <p>
              Passionné par le monde numérique, je suis un ancien professionnel
              de la vente dans l'industrie du luxe qui a embrassé la révolution
              technologique en devenant développeur front-end. Mon parcours dans
              le luxe m'a inculqué une sensibilité esthétique et un engagement
              envers l'excellence, des valeurs que je m'efforce d'incorporer
              dans chaque ligne de code que je rédige. Mon objectif est de créer
              des expériences utilisateur élégantes et fonctionnelles, où le
              design rencontre la performance. je suis constamment en quête
              d'apprentissage et d'exploration de nouvelles technologies pour
              rester à la pointe du développement front-end. Mon approche du
              codage est orientée vers la création d'interfaces utilisateur
              intuitives, réactives et esthétiquement plaisantes.
            </p>
          </article>
        </section>

        <div className="projets">
          <h4>Projets :</h4>
          <ul>
            <a href="#argentBank">
              <ButtonMenu title="Argent Bank" />
            </a>
            <a href="#77Events">
              <ButtonMenu title="77Events" />
            </a>
          </ul>
        </div>
      </div>

      <SeparationBarre />

      <div className="portfolio">
        <BankPage />
        <SeparationBarre />
        <EventsPage   />
      </div>
    </>
  );
}

export default Home;
