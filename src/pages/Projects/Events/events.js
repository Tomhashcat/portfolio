import React from "react";
import Card from "../../../Card/Card";
import ButtonMenu from "../../../components/ButtonMenu/ButtonMenu";
import { Link } from "react-router-dom";

import imgSlider from "../../../assets/img/slider.png";
import imgForm from "../../../assets/img/form.png";
function EventsPage() {



    return (

        <>
            <Link to="/*">  <ButtonMenu title="77Events" /></Link>

            <Card src={imgSlider} />
            <article>
            <strong> Gestion du slider : </strong><br /> <br />
                Mon rôle consistait à débugger un slider et à restaurer le bon fonctionnement de la pagination associée.
                Grâce à une approche méthodique du débogage, j'ai identifié et corrigé les problèmes sous-jacents,
                garantissant ainsi une expérience utilisateur fluide et sans accroc.
            </article>

            <Card src={imgForm} />
            <article>
            <strong> Login : </strong><br /> <br />
               Ma responsabilité a englobé la validation des données, la détection et le traitement des erreurs, ainsi que la redirection habile vers les réseaux appropriés.

               <br /><br /><strong> Validation des Données : </strong><br /> <br />Avant l'envoi, j'ai mis en place des mécanismes de validation pour m'assurer que les données soumises étaient complètes et conformes aux exigences du formulaire. Cela inclut la vérification de la validité des adresses e-mail, des numéros de téléphone et d'autres champs requis.

               <br /> <br /><strong> Gestion des Erreurs :</strong> <br /><br /> j'ai implanté des procédures  pour gérer les erreurs. En cas de données invalides ou manquantes, un message d'erreur clair et informatif est généré, aidant ainsi l'utilisateur à corriger rapidement son formulaire.

               <br /><br /><strong>Redirection Vers les Réseaux : </strong> <br /><br />Une fois le formulaire soumis avec succès, j'ai orchestré une redirection vers les réseaux appropriés. Cela peut inclure des pages de confirmation, des remerciements personnalisés ou même une intégration avec les médias sociaux pour partager l'interaction.

                Cette approche systématique a non seulement optimisé le processus d'envoi, mais a également amélioré l'engagement utilisateur en offrant des retours d'information immédiats et des itinéraires de navigation intuitifs. En tant que gestionnaire de cette facette technique, j'ai veillé à ce que chaque étape soit transparente et efficiente, contribuant ainsi à une expérience utilisateur positive.
            </article>
        </>
    )

}

export default EventsPage;