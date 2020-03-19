import React from 'react';
import { connect } from 'react-redux';
import GameList from '../components/GameList';
import { fetchGames, deleteGame } from '../actions';

class GamePage extends React.Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        return (
            <div>
                <h1>Game List</h1>
                <GameList games={this.props.game.games} deleteGame={this.props.deleteGame} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    game : state.game
});
const mapDispatchToProps = dispatch => ({
    fetchGames : () => dispatch(fetchGames()),
    deleteGame : (id) => dispatch(deleteGame(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);