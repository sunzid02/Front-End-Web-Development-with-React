import { LEADERS } from '../shared/leaders'

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
export const Leaders = (state = LEADERS, action) => {

    switch (action.type) {
        default:
            return state;
    }
}