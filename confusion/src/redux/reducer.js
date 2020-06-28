import { COMMENTS } from '../shared/comments'
import { DISHES } from '../shared/dishes'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'


// state
export const initialState = {
    comments: COMMENTS,
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
};


// action
// plain js obj with a type field that specifies how to
// change something in the state

/**
 * 
    Pure functions:     A function which is called Reducer in Redux,
                     that take the current state and action and return a 
                     new state
                        - Update data immutably ( do not modify inputs ) 
 */
export const Reducer = (state = initialState, action) => {
    return state;
};