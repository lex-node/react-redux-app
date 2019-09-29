import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/actions';
import DisplayJoke from './DisplayJoke';

const mapStateToProps = state => ({
    jokes: state.jokes,
    error: state.error
})

class DisplayJokes extends React.Component {
    render() {
        return (
            <div className="jokeBoxesContainer">
                <button onClick={() => this.props.getData()}>Get Random Jokes</button>
                {this.props.jokes.map(joke => (
                    <DisplayJoke key={joke.id} joke={joke}/>
                ))}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(DisplayJokes);

