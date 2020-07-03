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


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import { Dishes  } from './dishes';
import { Comments  } from './comments';
import { Promotions  } from './promotions';
import { Leaders  } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

//// creating store
export const ConfigureStore = () => {

    const store = createStore(         

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware( thunk, logger )            
    );

    

    return store;
}

