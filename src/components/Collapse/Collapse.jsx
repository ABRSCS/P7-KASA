//COLLAPSE.jsx
import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <i className={`fas fa-chevron-up arrow ${isOpen ? 'open' : ''}`}></i>
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
};

export default Collapse;