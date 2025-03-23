//HOME.jsx
import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import CardContainer from '../../components/CardContainer/CardContainer';
import homeBanner from '../../assets/images/Imagesource1.png';
import "./Home.css";

const Home = () => {
    const [logements, setLogements] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogements = async () => {
            try {
                const response = await fetch("/src/data/logements.json");
                if (!response.ok) {
                    throw new Error('Problème lors du chargement des données');
                }
                const data = await response.json();
                setLogements(data);
            } catch (err) {
                console.error("Erreur:", err);
                setError(err.message);
            }
        };

        fetchLogements();
    }, []);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="home">
            <div className="container">
                <Banner 
                    image={homeBanner}
                    altText="Paysage de montagne"
                    title="Chez vous, partout et ailleurs"
                />
                <CardContainer>
                    {logements.map((logement) => (
                        <Card
                            key={logement.id}
                            id={logement.id}
                            title={logement.title}
                            imageUrl={logement.cover}
                        />
                    ))}
                </CardContainer>
            </div>
        </div>
    );
};

export default Home