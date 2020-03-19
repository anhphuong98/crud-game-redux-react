import React from 'react';
import { Link } from 'react-router-dom';

class GameCard extends React.Component {
    render() {
        const game = this.props.game;
        const deleteGame = this.props.deleteGame;
        return (
            <div className="ui card">
                <div className="image">
                    <img src={game.url} alt={'gameCover'} />
                </div>
                <div className="content">
                    <div className="header">{game.title}</div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <Link to={`/game/${game.id}`} className="ui basic button green">Edit</Link>
                        <Link to={''} className="ui basic button red" onClick={() => deleteGame(game.id)}>Delete</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameCard;