//ACCOMMODATION.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import StarRating from '../../components/StarRating/StarRating';
import Slideshow from '../../components/Slideshow/Slideshow';
import "./Accommodation.css";

const Accommodation = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch("/src/data/logements.json");
                if (!response.ok) {
                    throw new Error('Problème lors du chargement des données');
                }
                const data = await response.json();
                const logementTrouve = data.find(log => log.id === id);
                if (!logementTrouve) {
                    throw new Error('Logement non trouvé');
                }
                setLogement(logementTrouve);
            } catch (err) {
                console.error("Erreur:", err);
                setError(err.message);
            }
        };

        fetchLogement();
    }, [id]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!logement) {
        return <div className="loading">Chargement...</div>;
    }
  
    return (
        <div className="logement-container">
           {/* Remplacement de l'image principale par le carrousel */}
           <Slideshow images={logement.pictures} />

{/* Section titre + host */}
<div className="header-section">
    <div className="title-block">
        <h1 className="title">{logement.title}</h1>
        <p className="location">
            {logement.location.split(' - ').reverse().join(', ')}
        </p>
        
        {/* Tags */}
        <div className="tags-container">
            {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    </div>

    {/* Host */}
    <div className="host-block">
        <div className="host-info">
            <span className="host-name">{logement.host.name}</span>
            <img 
                src={logement.host.picture} 
                alt={logement.host.name}
                className="host-picture" 
            />
        </div>
        <StarRating rating={logement.rating} />
    </div>
</div>

{/* Menus déroulants */}
<div className="collapse-section">
    <Collapse title="Description" content={logement.description} />
    <Collapse 
        title="Équipements" 
        content={
            <ul>
                {logement.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        } 
    />
</div>
</div>
);
};

export default Accommodation;