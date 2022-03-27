import { types } from '../types/types';

export const catgReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        
        case types.showCategorias:
            console.log(action.payload)
            return {
                data: action.payload
            }
            
        default:
            return state;
    }

}