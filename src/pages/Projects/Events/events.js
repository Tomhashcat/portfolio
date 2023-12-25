import React from "react";
import Card from "../../../Card/Card";
import ButtonMenu from "../../../components/ButtonMenu/ButtonMenu";
import { Link } from "react-router-dom";
import "./Events.scss";
import imgSlider from "../../../assets/img/slider.png";
import imgForm from "../../../assets/img/form.png";
function ProjetPage() {



    return (

        <>
            <Link to="/*">  <ButtonMenu title="77Events" /></Link>

            <Card src={imgSlider} />
            <article>
                Mon rôle consistait à débugger un slider et à restaurer le bon fonctionnement de la pagination associée.
                Grâce à une approche méthodique du débogage, j'ai identifié et corrigé les problèmes sous-jacents,
                garantissant ainsi une expérience utilisateur fluide et sans accroc.
            </article>

            <Card src={imgForm} />
            <article>
               Ma responsabilité a englobé la validation des données, la détection et le traitement des erreurs, ainsi que la redirection habile vers les réseaux appropriés.

              <strong> Validation des Données : </strong> Avant l'envoi, j'ai mis en place des mécanismes de validation pour m'assurer que les données soumises étaient complètes et conformes aux exigences du formulaire. Cela inclut la vérification de la validité des adresses e-mail, des numéros de téléphone et d'autres champs requis.

               <strong> Gestion des Erreurs :</strong>  j'ai implanté des procédures  pour gérer les erreurs. En cas de données invalides ou manquantes, un message d'erreur clair et informatif est généré, aidant ainsi l'utilisateur à corriger rapidement son formulaire.

               <strong>Redirection Vers les Réseaux : </strong> Une fois le formulaire soumis avec succès, j'ai orchestré une redirection vers les réseaux appropriés. Cela peut inclure des pages de confirmation, des remerciements personnalisés ou même une intégration avec les médias sociaux pour partager l'interaction.

                Cette approche systématique a non seulement optimisé le processus d'envoi, mais a également amélioré l'engagement utilisateur en offrant des retours d'information immédiats et des itinéraires de navigation intuitifs. En tant que gestionnaire de cette facette technique, j'ai veillé à ce que chaque étape soit transparente et efficiente, contribuant ainsi à une expérience utilisateur positive.
            </article>
        </>
    )

}

export default ProjetPage;