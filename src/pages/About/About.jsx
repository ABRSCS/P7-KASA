// ABOUT.jsx
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import aboutBanner from '../../assets/images/Imagesource2.png';
import './About.css';

const About = () => {
    const collapseData = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <div className="about">
            <div className="container">
                <Banner 
                    image={aboutBanner}
                    altText="Paysage montagneux"
                    title=""
                    className="about"
                />
                <div className="collapse-container">
                    {collapseData.map((item, index) => (
                        <Collapse 
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;