
import { GET_GAMES, DELETE_GAME, CREATE_GAME, GET_GAME, UPDATE_GAME } from '../actionTypes/index';

export const fetchGames = () => (
    async dispatch => {
        const response  = await fetch('http://127.0.0.1:8080/api/game');
        const data = await response.json();
        const games = data.games.rows;
        console.log(games);
        dispatch({
            type: GET_GAMES,
            games
        });
    }
)
   
export const saveGame = (game) => (
    async dispatch => {
        const response = await fetch("http://127.0.0.1:8080/api/game", {
            method : 'post',
            body : JSON.stringify(game),
            headers: {
                "Content-Type": "application/json"
            }
        }); 
        const data = await response.json();
        console.log(data);
        if(data.success === true) {
            const game = data.data;
            await dispatch({
                type : CREATE_GAME,
                game
            });
        }
        else {
            console.log("Error save game");
        }
    }
)
export const fetchGame = (id) => (
    async dispatch => {
        console.log(id);
        const response = await fetch("http://127.0.0.1:8080/api/game/" + id);
        const data = await response.json();
        console.log(data);
        if(data.success === true){
            const game = data.data
            await dispatch({
                type: GET_GAME,
                game
            })
        }else{
            console.log("Error get game")
        }
    }
)

export const updateGame = (game) => (
    async dispatch => {
        const id = game.id;
        let response = await fetch("http://127.0.0.1:8080/api/game/" + id, {
            method: 'put',
            body: JSON.stringify(game),
            headers: {
                "Content-Type": "application/json"
            }
        });
        response = await response.json();
        const data  = response.data;
        await dispatch({
            type : UPDATE_GAME,
            data
        })
    }
)
export const deleteGame = (id) => (
    async dispatch => {
            await fetch("http://127.0.0.1:8080/api/game/" + id, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        });
        await dispatch({
            type: DELETE_GAME,
            id
        });
    }
)
