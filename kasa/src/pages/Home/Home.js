import React from "react";

import "../../styles/Home.css";
import Banniere from "../../components/banner";
import bannerHome from "../../assets/bannerHome.png";
import Cards from '../../components/cards';

function Home() {
  return (
    <main>
      <div className="accueil">
        <div className="banniere-accueil">
          <Banniere image={bannerHome} texte="Chez vous, partout et ailleurs" />
        </div>
        <div className="block-logements">
          <Cards texte="titre de la location" />
        </div>
      </div>
    </main>
  );
}

export default Home;