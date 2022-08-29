import React from 'react';
import img from '../images/trollface.png';

export default function Header() {
    return (
        <header className="header">
            <img 
            src={img} alt="not here" 
            className='header--image'
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project </h4>

        </header>
    )
}
