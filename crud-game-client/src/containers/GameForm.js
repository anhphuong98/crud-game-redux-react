import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame, fetchGame, updateGame} from '../actions';

class GameForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.game ? this.props.game.id : null, 
            title : this.props.game ? this.props.game.title : '',
            url : this.props.game ? this.props.game.url : '',
            done : false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }
    componentDidMount() {
        if(this.props.match.params.id){
            this.props.fetchGame(this.props.match.params.id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.game !== nextProps.game){
            this.setState({
                id: nextProps.game.id,
                title: nextProps.game.title,
                url: nextProps.game.url
            })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const {title, url, id} = this.state;
        if(id) {
            this.props.updateGame({id, title, url}).then(() => {
                this.setState({
                    done : true
                });
            });
        }else {
            this.props.saveGame({title, url}).then(() => {
                this.setState({
                    done : true
                });
            });
        }
       
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    renderForm() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form">
                <h1>Add New Game</h1>
                <div className="field">
                    <label>Title</label>
                    <input 
                        onChange={this.handleChange} 
                        type="text"
                        value={this.state.title}
                        name="title"
                    />
                </div>
                <div className="field">
                    <label>URL</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.url}
                        name="url"
                    />
                </div>
                {this.state.url.trim() !== '' && 
                    <div className="field">
                        <img alt="url" src={this.state.url} className="ui small bordered image"/>
                    </div>
                }
                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
                
            </form>
        );
    }
    render() {
        return (
            <div>
                {this.state.done ? <Redirect to="/games"/> : this.renderForm()}
            </div>
        );
    }
}
// Day la arrow function trong ES6 viet the nay hieu la return ve 1 Object literal
const mapStateToProps = (state, props) => (
    props.match.params.id ? {game : state.game.game} : {game : null}
    
);

const mapDispatchToProps = dispatch => ({
    saveGame : (game) => dispatch(saveGame(game)),
    fetchGame : (id) => dispatch(fetchGame(id)),
    updateGame : (game) => dispatch(updateGame(game))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);