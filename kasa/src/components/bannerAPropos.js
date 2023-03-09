import React from "react";

import "../styles/banner.css";

function banniereAPropos({ image }) {
    return (
        <div className="block-banniere">
            <img className="banniereAPropos" src={image} alt="banniere"/>
            <span className="backgroundAPropos"></span>
        </div>
    );
}

export default banniereAPropos;