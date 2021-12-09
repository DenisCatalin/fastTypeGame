import DifficultyActionTypes from './difficulty.types';

export const changeDifficulty = difficulty => ({
    type: DifficultyActionTypes.SET_DIFFICULTY,
    payload: difficulty
})