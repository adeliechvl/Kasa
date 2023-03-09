import React from "react";

import "../styles/banner.css";

function BanniereHome({ image, texte }) {
    return (
        <div className="block-banniere">
            <img className="banniereHome" src={image} alt="banniere" />
            <span className="backgroundHome"></span>
            <span className="texte-accueil">{texte}</span>
        </div>
    );
}

export default BanniereHome;