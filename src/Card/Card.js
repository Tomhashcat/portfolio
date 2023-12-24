import React from "react";
import "./Card.scss";

function Card({src, alt}) {
    return (
        <>
            <div className="card">
                <img className="card__img" src={src} alt={alt}  ></img>
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
            </div>
        </>
    )
}

export default Card;