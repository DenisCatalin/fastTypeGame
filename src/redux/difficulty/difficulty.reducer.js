import DifficultyActionTypes from "./difficulty.types";

const INITIAL_STATE = {
    level: 'EASY',
};

const difficultyReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DifficultyActionTypes.SET_DIFFICULTY:
            return {
                ...state,
                level: action.payload
            }
        default:
            return state;
    }
}

export default difficultyReducer;