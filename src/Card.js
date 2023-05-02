import './Summary.css';
import React from "react";
import Summary from "./Summary";
import Note from './Note';

function Card() {
    return (
        <div className='container'>
            <div className='card'>
                <Note/>
                <Summary/>
            </div>
        </div>
    );
}

export default Card;