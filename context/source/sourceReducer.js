import {
    ADD_SOURCE,
    REMOVE_SOURCE,
    LOAD_LIST_SOURCES
} from '../types';

export default (state, action) => {
    switch(action.type){
        case LOAD_LIST_SOURCES :
            return {
                ...state,
                listOfSources : action.payload
            }
        case ADD_SOURCE : 
            return {
                ...state,
                listOfSources : state.listOfSources.map(s => s.key === action.payload.key ? action.payload : s)                
            }    
        default : 
            return state
    }
}