import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



const Insta = () => {
    return (
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className='instaLink'>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    );
}

export default Insta;