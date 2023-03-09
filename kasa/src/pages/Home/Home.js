import React from "react";

import "../../styles/Home.css";

import Banniere from "../../components/bannerHome";
import Cards from '../../components/cards';

import bannerHome from "../../assets/bannerHome.png";
import ListeLogements from "../../assets/Logements.json";

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="accueil">
        <div className="banniere-accueil">
          <Banniere image={bannerHome} texte="Chez vous, partout et ailleurs" />
        </div>
        <div className="block-logements">
          {ListeLogements.map((logement) =>
            <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
              <Cards key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
            </NavLink>)}
        </div>
      </div>
    </main>
  );
}

export default Home;