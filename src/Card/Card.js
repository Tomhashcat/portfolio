import React from "react";
import "./Card.scss";
import imgSlider from "../assets/img/slider.png";
function Card() {
    return (
        <>
            <div className="card">
                <img className="card__img" src={imgSlider}  alt="Slider" ></img>
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
            </div>
        </>
    )
}

export default Card;