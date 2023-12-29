import React from "react";

import "./Home.scss";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import EventsPage from "../Projects/Events/events";
import SeparationBarre from "../../components/Separation/SeparationBarre";
import BankPage from "../Bank/Bank";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
     
        <title>Thomas Dutourné - Web Developer</title>
        <meta
          name="description"
          content="Personal portfolio for web developer. Specialized in ReactJS and JavaScript."
        />
        <meta property="og:title" content="Thomas Dutourné - Web Developer" />
        <meta
          property="og:description"
          content="Personal portfolio for web developer. Specialized in ReactJS and JavaScript."
        />
        <meta
          property="og:image"
          content="https://your-website-url.com/og-image.jpg"
        />
        <meta property="og:url" content="https://your-website-url.com" />
    

      <h1>Thomas Dutourné</h1>
      <h2>Web Developer</h2>
      <h3>Modern and créative</h3>
      <a
        href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
        aria-label="LinkedIn Profile"
      >
        <FontAwesomeIcon
          className="icones"
          alt="icone linkedin"
          icon={faLinkedin}
        />
      </a>
      <a
        href="https://github.com/Tomhashcat?tab=repositories"
        aria-label="GitHub Profile"
      >
        <FontAwesomeIcon className="icones" icon={faGithub} alt="icon github" />
      </a>
      <a href="mailto:dutourne.t@gmail.com" aria-label="Email">
        <FontAwesomeIcon
          className="icones"
          icon={faEnvelope}
          alt="icon gmail"
        />
      </a>
      <SeparationBarre />

      <div className="intro">
        <section className="about-me">
          <article className="About">
            <h4>About me :</h4>

            <p>
              Diplômé en développement front-end, je maîtrise ReactJS et
              JavaScript. Spécialisé dans la création d'interfaces réactives et
              intéractives, je suis habitué à MongodB . Mon approche est axée
              sur la modularité, la performance, et la résolution efficace des
              problèmes. Prêt à relever de nouveaux défis et à apprendre de
              nouvelles techonologies, je combine créativité et expertise
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
