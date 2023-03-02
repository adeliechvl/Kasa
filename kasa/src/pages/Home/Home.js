import React from "react";

import "../../styles/Home.css";
import Banniere from "../../components/banner";
import bannerHome from "../../assets/bannerHome.png";

function Home() {
  return (
    <div className="accueil">
      <div className="banniere-accueil">
        <Banniere image={bannerHome} texte="Chez vous, partout et ailleurs" />
      </div>
      
    </div>
  );
}

export default Home;