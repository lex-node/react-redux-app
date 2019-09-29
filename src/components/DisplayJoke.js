import React from 'react';
import '../App.css';

const DisplayJoke = props => {
    return (
        <div className="jokeBox">
            <p>{props.joke.setup}</p>
            <p>{props.joke.punchline}</p>
        </div>
    )
};

export default DisplayJoke;
