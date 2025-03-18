// BANNER.jsx
import React, { useState, useEffect } from 'react';

import './Banner.css';

function Banner({ image, altText, title }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const formatTitle = (title) => {
        if (!title) return null;
        const parts = title.split(',');
        if (parts.length === 2) {
            return (
                <h1 className="banner-title">
                    {parts[0]},{isMobile ? <br/> : ' '}{parts[1]}
                </h1>
            );
        }
        return <h1 className="banner-title">{title}</h1>;
    };

    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            {formatTitle(title)}
            <img src={image} alt={altText} className="banner-image" />
        </div>
    );
}
  
export default Banner;
