/**     REDUX
 *
 *  # Holds the current state
 *
 *  # Created using createStore()
 *
 *  # Supplies three methods:
 *      - dispatch(): states state update with the provided action object
 *                      
 *                      Dispatch method is where you will supply the 
 *                      action object and then specify what 
 *                      changes you want to make to the state.
 *      
 *      - getState(): returns the current stored state value
 *      - subscribe(): accept a callback function that will be run every time
 *                     an action is dispatched
 *
 */


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

