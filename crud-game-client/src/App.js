import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import GamePage from './containers/GamePage';
import GameForm from './containers/GameForm';


class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router>
                    <div className="ui three item menu">
                        <Link className="item"  to="/">Home</Link>
                        <Link className="item"  to="/games">Games</Link>
                        <Link className="item"  to="/games/new">Add New Game</Link>
                    </div>
                        <Route exact path='/games' component={() => <GamePage />} />
                        <Route exact path='/games/new' component={(props) => <GameForm {...props}/>} />
                        <Route exact path='/game/:id' component={(props) => <GameForm {...props}/>} />
                </Router>
            </div>  
        );
    } 
}
export default App;