import React from "react";

import "./Home.scss";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import EventsPage from "../Projects/Events/events";
import SeparationBarre from "../../components/Separation/SeparationBarre";
import BankPage from "../Bank/Bank";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Home() {
  return (
    <>
      <h1>Thomas Dutourné</h1>
      <h2>Personal portfolio for web developper</h2>
      <h3>Modern and créative</h3>
      <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" aria-label="LinkedIn Profile">
        <FontAwesomeIcon className="icones" alt='icone linkedin' icon={faLinkedin} />
      </a>
      <a href="https://github.com/Tomhashcat?tab=repositories" aria-label="GitHub Profile">
        <FontAwesomeIcon className="icones" icon={faGithub} alt='icon github'/>
      </a>
      <SeparationBarre />

      <div className="intro">
        <section className="about-me">
          <article className="About">
            <h4>About me :</h4>

            <p>
              Diplômé en développement front-end, je maîtrise ReactJS et
              JavaScript. Spécialisé dans la création d'interfaces réactives et
              élégantes, je suis passionné par l'optimisation des expériences
              utilisateur. Mon approche est axée sur la modularité, la
              performance, et la résolution efficace des problèmes. Prêt à
              relever de nouveaux défis, je combine créativité et expertise
              technique pour offrir des solutions web modernes et intuitives.
            </p>
          </article>
        </section>

        <div className="projets">
          <h4 className="titleProjets">Projets :</h4>
          <div className="buttons">
            <a href="#argentBank">
              <ButtonMenu title="Argent Bank" />
            </a>
            <a href="#77Events">
              <ButtonMenu title="77Events" />
            </a>
          </div>
        </div>
      </div>

      <SeparationBarre />

      <div className="portfolio">
        <BankPage />
        <SeparationBarre />
        <EventsPage />
      </div>
    </>
  );
}

export default Home;
