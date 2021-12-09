import { combineReducers } from "redux";
import difficultyReducer from "./difficulty/difficulty.reducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['difficulty']
}

const rootReducer = combineReducers({
    difficulty: difficultyReducer,
});

export default persistReducer(persistConfig, rootReducer);