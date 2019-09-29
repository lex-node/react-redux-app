import React from 'react';

const DisplayJoke = props => {
    return (
        <div>
            <p>{props.joke.setup}</p>
            <p>{props.joke.punchline}</p>
        </div>
    )
};

export default DisplayJoke;
