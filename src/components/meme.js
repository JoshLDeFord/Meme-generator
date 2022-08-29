

import React from 'react';
import memesData from '../memesData.js';


export default function Meme() {
    function clickMe() {
        const memesArray = memesData.data.memes
        const randomNumber= Math.floor(Math.random() *memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);

    }

    return (
        <main>
            <div className="form">
                <input type="text"
                    className='form--input'
                    placeholder='Top text'
                />
                <input type="text"
                    className='form--input'
                    placeholder='Bottom text'
            
            />
                <button onClick={clickMe} className='form--btn'>Get a new meme image</button>
         </div>
        </main>
    )
}