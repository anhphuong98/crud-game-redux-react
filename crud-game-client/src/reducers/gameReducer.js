import { GET_GAMES, CREATE_GAME, GET_GAME, DELETE_GAME } from "../actionTypes";

const initialState = {
    games : []
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_GAMES:
            return {
                games : action.games
            }
        case CREATE_GAME:
            return {
                ...state
            }
        case GET_GAME:
            return {
                ...state,
                game : action.game
            }
        case DELETE_GAME:
            const games = state.games.filter(item => item.id !== action.id);
            return {
                games
            }
        default: 
            return state;
    }
}