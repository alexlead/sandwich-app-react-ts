import { createStore, combineReducers } from 'redux'
import counterReducer from './counter/counterReducer';
import sandwichReducer from './sandwich/sandwichReducer';

const store = createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer
}));

export default store;

export type RootState = ReturnType<typeof store.getState>