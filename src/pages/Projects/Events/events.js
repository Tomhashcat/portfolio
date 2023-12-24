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

            <Card  src={imgSlider}/>
            <article>
                Mon rôle consistait à débugger un slider et à restaurer le bon fonctionnement de la pagination associée.
                Grâce à une approche méthodique du débogage, j'ai identifié et corrigé les problèmes sous-jacents,
                garantissant ainsi une expérience utilisateur fluide et sans accroc.
            </article>

            <Card  src={imgForm}/>
        </>
    )

}

export default ProjetPage;