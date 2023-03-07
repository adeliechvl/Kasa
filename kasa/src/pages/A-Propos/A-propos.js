import React from "react";

import "../../styles/A-Propos.css";
import Banniere from "../../components/banner";
import banniereAPropos from "../../assets/bannerAPropos.png";


function APropos() {
    return(
        <div className="APropos">
        <Banniere image={banniereAPropos} titre="image banniere"/>
    </div>
    );
}

export default APropos;