import * as ActionTypes from './ActionTypes';

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

////reducer function
export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return { ...state, isLoading: false, errMess: null, promotions: action.payload };

        case ActionTypes.PROMOS_LOADING:
            return { ...state, isLoading: true, errMess: null, promotions: [] }

        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};