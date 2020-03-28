import React, { useReducer } from 'react';
import SourceContext from './sourceContext';
import SourceReducer from './sourceReducer';

import { AsyncStorage } from 'react-native';

import {
    LOAD_LIST_SOURCES,
    ADD_SOURCE,
    REMOVE_SOURCE
} from '../types';

const SourceState = props => {
    const initialState = {
        listOfSources : []        
    }

    const [state, dispatch] = useReducer(SourceReducer, initialState);

    const loadListOfSources = async () => {
        const listOfSources = await AsyncStorage.getItem('listOfSources');
        let list;
        if(!listOfSources) {
            list = [
                { name : 'Infobae', added : true, key : '1' }, { name : 'La Nación', added : true, key : '2' }, 
                { name : 'Clarín', added : false, key : '3' }, { name : 'Ambito', added : true, key : '4' }, 
                { name : 'El Ancasti', added : false, key : '5' }, { name : 'La Gaceta', added : true, key : '6' },
                { name : 'El Cronista', added : true, key : '7' }, { name : 'TN', added : false, key : '8' }          
            ];
            await AsyncStorage.setItem('listOfSources', JSON.stringify(list)); 

        } else {
            list = JSON.parse(listOfSources);
        }

        dispatch({
            type : LOAD_LIST_SOURCES,
            payload : list
        }); 
    }

    const addOrRemoveSource = source => {
        const changedSource = {
            name : source.name,
            key : source.key,
            added : !source.added
        };

        dispatch({
            type : ADD_SOURCE,
            payload : changedSource
        })                        
    }

    return (
        <SourceContext.Provider
            value={{
                listOfSources : state.listOfSources,
                loadListOfSources,
                addOrRemoveSource
            }}
        >
            {props.children}
        </SourceContext.Provider>
    )

}

export default SourceState;