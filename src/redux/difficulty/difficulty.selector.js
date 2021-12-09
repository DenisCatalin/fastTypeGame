import { createSelector } from 'reselect';

const selectDifficulty = state => state.difficulty;

export const selectDifficultyLevel = createSelector(
    [selectDifficulty],
    difficulty => difficulty.level
)