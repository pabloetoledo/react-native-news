import {
    ADD_SOURCE,
    END_OF_UPDATE,
    LOAD_LIST_SOURCES
} from '../types';

export default (state, action) => {
    switch(action.type){
        case LOAD_LIST_SOURCES :
            return {
                ...state,
                listOfSources : action.payload,
                loading : false
            }
        case ADD_SOURCE : 
            return {
                ...state,
                listOfSources : state.listOfSources.map(s => s.key === action.payload.key ? action.payload : s),
                update : true                
            }
        case END_OF_UPDATE:
            return {
                ...state,
                update : false
            }        
        default : 
            return state
    }
}