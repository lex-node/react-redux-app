import React from 'react';
import '../App.css';

const DisplayJoke = props => {

    const toggleVisibility = (elementID) => {
        document.getElementById(elementID).classList.remove('invisibleElement')
    };

    return (
        <div className="jokeBox">
            <p>{props.joke.setup}</p>
            <button onClick={() => toggleVisibility(props.joke.id)}>Tell me!</button>
            <p className="invisibleElement" id={props.joke.id}>{props.joke.punchline}</p>
        </div>
    )
};

export default DisplayJoke;
