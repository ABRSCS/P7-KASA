// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, title, imageUrl }) => {
    return (
      <Link to={`/logement/${id}`} className="card">
        <div className="card-content">
          <img src={imageUrl} alt={title} className="card-image" />
          <div className="card-overlay"></div>
          <h2 className="card-title">{title}</h2>
        </div>
      </Link>
    );
  };

export default Card;
