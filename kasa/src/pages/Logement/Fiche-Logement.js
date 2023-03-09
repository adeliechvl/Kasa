import React from "react";
import { useParams, Navigate } from 'react-router-dom';

import "../../styles/Fiche-Logement.css"

import ListeLogements from "../../assets/Logements.json";
import EtoileRouge from "../../assets/Etoile-Rouge.png";
import EtoileGrise from "../../assets/Etoile-Grise.png";

import Dropdown from "../../components/dropdown"
import Carrousel from "../../components/carrousel";
import Tag from "../../components/tags";


function Logement() {

    const id = useParams();
    const pageLogement = ListeLogements.find(logement => logement.id === id.id);
    const tagNameLogement = pageLogement?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags}/>
    });

    let infosLogement = [];
    let etoileValide = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(pageLogement?.rating)) {
            etoileValide = false;
        }
        if (etoileValide === true) {
            infosLogement.push(<img key={index} className="etoile" src={EtoileRouge} alt={`${pageLogement?.rating}/5`}/>)
        } else {
            infosLogement.push(<img key={index} className="etoile" src={EtoileGrise} alt={`${pageLogement?.rating}/5`}/>)
        }
    }

    const equipementLogement = pageLogement?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return (
        <>
            {pageLogement ? (
                <div className="block-logement">
                    <Carrousel images={pageLogement?.pictures} />
                    <div className="titre-logement">
                        <div className="information-logements">
                            <span className="nom-logement">{pageLogement?.title}</span>
                            <span className="lieux">{pageLogement?.location}</span>
                            <div className="tags">{tagNameLogement}</div>
                        </div>
                        <div className="information-proprietaire">
                            <div className="avatar-proprietaire">
                                <span className="nom-proprietaire">{pageLogement?.host.name}</span>
                                <img className="photo-proprietaire" src={pageLogement?.host.picture} alt="Portrait Proprietaire"/>
                            </div>
                            <div className="note">
                                {infosLogement}
                            </div>
                        </div>
                    </div>
                    <div className="description-equipement-logement">
                        <div className="description-logement">
                            <Dropdown titre="Description" description={pageLogement?.description}/>
                        </div>
                        <div className="equipement-logement">
                            <Dropdown titre="Équipements" description={equipementLogement}/>
                        </div>
                    </div>
                </div>
            )
                : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default Logement;