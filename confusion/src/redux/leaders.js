import * as ActionTypes from './ActionTypes';
// import { LEADERS } from '../shared/leaders';


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








////reducer function, returns the next immutable state
export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, errMess: null, leaders: action.payload };

        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] }

        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
}