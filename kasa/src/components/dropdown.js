import React, { useState } from "react";

import "../styles/dropdown.css";
import fleche from "../assets/fleche-bas.svg";

function Dropdown({ titre, description }) {
    const [ouvert, setOuvert] = useState(false);

    return (
        <div className="dropdown" id={`about-${titre}`}>
            <div className="header-dropdown">
                <div className="titre-dropdown">{titre}</div>
                <span className={`fleche-dropdown ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste" />
                </span>
            </div>

            {
                ouvert && <div className="description-dropdown">{description}</div>
            }
        </div>
    );
}

export default Dropdown;