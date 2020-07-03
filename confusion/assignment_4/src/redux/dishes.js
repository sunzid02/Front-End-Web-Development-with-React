
/*reducer functions
    
    takes two params 
    * action
         # payloads of information that send data from your application 
           to the store. 

         # type property (indicates type of action to be performed)

         # payload (data necessary for the action)

    * state
    
    ## action typically handled through a switch statement switching     
    on the action type.

    ## return the previous state in the default case

* */

import * as ActionTypes from "./ActionTypes";

export const Dishes = (
    state = {
        isLoading: true,
        errMess: null,
        dishes: []
    },
    action
    ) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            };

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] };

        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};