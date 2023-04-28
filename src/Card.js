import './Summary.css';
import React from "react";
import Summary from "./Summary";
import Note from './Note';

function Card() {
    return (
        <div className='card'>
            <Note/>
            <Summary/>
        </div>
    );
}

export default Card;