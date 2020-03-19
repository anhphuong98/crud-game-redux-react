import React from 'react';
import GameCard from './GameCard';

class GameList extends React.Component {
    render() {
        const games = this.props.games;
        const deleteGame = this.props.deleteGame;
        return (
            <div>
                {
                games.length === 0 ?
                <p>There are no games yet in your collection</p>
                :
                <div className="ui four cards">
                    {
                        games.map((game) => <GameCard game={game} deleteGame={deleteGame} key={game.id}/>)
                    }
                </div>
            }
            </div> 
        );
    }
}

export default GameList;