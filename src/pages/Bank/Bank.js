import React from "react";
import Card from "../../Card/Card";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import { Link } from "react-router-dom";
import imgHome from "../../assets/img/home.png";
import imgLogin from "../../assets/img/login.png";
import imgUser from "../../assets/img/user.png";
import imgSwagg from "../../assets/img/swagg.png";

function BankPage() {
    return (
        <>
            <Link to="/*">  <ButtonMenu title="Argent Bank" /></Link>
            <h2>Développement du front-end d'une application banquaire :</h2>
            <Card src={imgHome} />
            <article>
                <h3>Optimisation des Performances et Intégration d'API</h3>
                <p>  Au cours de la phase de développement, j'ai entrepris des mesures décisives pour améliorer les performances du site, en mettant l'accent sur la réduction du temps de chargement des pages et l'optimisation de l'expérience utilisateur.</p>
                <br />  <strong> Reformatage des Images : </strong>
                <p>Une des principales initiatives a été le reformatage des images. J'ai implémenté une stratégie de compression intelligente pour réduire la taille des fichiers tout en préservant la qualité visuelle. Cela a permis de diminuer considérablement les temps de chargement des pages, offrant ainsi aux utilisateurs une navigation plus fluide et rapide.

                    <strong>Récupération des Données Utilisateur via API : </strong>Pour personnaliser davantage l'expérience de chaque utilisateur, j'ai intégré une fonctionnalité de récupération des données utilisateur via une requête vers une API. En utilisant le Token fourni par l'API lors de la connection, le système interagit dynamiquement avec l'API pour extraire des informations pertinentes. Cela a permis d'afficher des contenus personnalisés, tels que les comptes ou les transactions.</p>
            </article>

            <Card src={imgLogin} />
            <article>
                <h3>Gestion Avancée du Formulaire de Connexion avec Fonction "Se Souvenir de Moi"</h3>

                <p>  Au sein du processus de développement, une attention particulière a été accordée à la gestion du formulaire de connexion, visant à optimiser la sécurité et l'expérience utilisateur.Deux aspects clés ont été mis en œuvre : la gestion du formulaire de connexion (login) et la fonction "Se souvenir de moi" (isRemember).</p>

                <br /> <strong>Gestion du Formulaire de Connexion :</strong> <br />Pour garantir une sécurité accrue, j'ai implémenté des mécanismes de validation robustes au niveau du formulaire de connexion. Cela inclut la vérification des identifiants et la gestion adéquate des erreurs. Les messages d'erreur sont conçus pour être informatifs tout en évitant toute divulgation non nécessaire d'informations sensibles. De plus, des mesures anti-bruteforce ont été intégrées pour protéger contre les attaques par force brute.<br />

                <br />  <strong>Fonction "Se Souvenir de Moi" (isRemember) :</strong> <br /><p> La fonction "Se souvenir de moi" est un élément clé pour améliorer l'expérience utilisateur.

                    Cette approche a été mise en œuvre dans le respect des meilleures pratiques de sécurité, garantissant que les données sensibles des utilisateurs sont traitées avec le plus grand soin. La combinaison de la gestion sécurisée du formulaire de connexion et de la fonction "Se souvenir de moi" contribue à une expérience utilisateur fluide et sécurisée.
                </p> </article>
            <Card src={imgUser} />
            <article>
                <h3>La page utilisateur :</h3>
                <p>Au sein de l'application bancaire, j'ai mis en place une architecture  utilisant React pour garantir une gestion efficace des comptes et une expérience utilisateur personnalisée. La création de composants dynamiques a été au cœur de cette approche, permettant un affichage fluide des résultats des activités sur chaque compte.</p><br />
                <strong>Composant de Compte :</strong>
                <p>Pour chaque compte récupéré via l'API, j'ai créé un composant dédié. Ce composant encapsule toutes les informations relatives à un compte spécifique, facilitant ainsi la réutilisation et la modularité du code. Les détails du compte, tels que le solde, les transactions récentes et d'autres informations pertinentes, sont dynamiquement injectés dans ce composant. </p>
            </article>

            <Card src={imgSwagg}/>
            <article>
                <h3>Création de la documentation : </h3>
<p>Lors de ce projet j'ai développeé un document swagger dans la prévision de la phase deux du site. La documentation Swagger que j'ai élaborée n'est pas seulement une liste d'endpoints, mais une ressource interactive qui simplifie la compréhension et l'utilisation de notre API. J'ai personnalisé chaque section pour aligner la documentation avec les attentes du client, incluant des détails sur la manière d'utiliser certains endpoints, des exemples pratiques, et des indications claires sur les retours attendus.</p>
            </article>
        </>
    );
};

export default BankPage;