import { types } from '../types/types';

export const catgReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        
        case types.showCategorias:
            return {
                ...state,
                data: action.payload
            }

        case types.namesCategorias:
            return {
                ...state,
                names: action.names
            }
        default:
            return state;
    }

}