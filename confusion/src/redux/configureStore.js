import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

// creating store
export const ConfigureStore = () => {
    const store = createStore( 
        Reducer, 
        initialState
    );

    return store;
}

