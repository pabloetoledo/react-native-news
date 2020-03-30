import React, { useReducer } from 'react';
import SourceContext from './sourceContext';
import SourceReducer from './sourceReducer';

import { AsyncStorage } from 'react-native';

import {
    LOAD_LIST_SOURCES,
    ADD_SOURCE,
    END_OF_UPDATE
} from '../types';

const SourceState = props => {
    const initialState = {
        listOfSources : [],
        loading : true,
        update : false        
    }

    const [state, dispatch] = useReducer(SourceReducer, initialState);

    const loadListOfSources = async () => {
        console.log('loadListOfSources');
        const listOfSources = await AsyncStorage.getItem('listOfSources');
        let list;
        if(!listOfSources) {
            list = [
                { name : 'Infobae', added : true, key : 'Infobae' }, { name : 'La Nación', added : true, key : 'La Nacion' }, 
                { name : 'Clarín', added : false, key : 'Clarin.com' }, { name : 'Ambito', added : true, key : 'Ambito.com' }, 
                { name : 'El Ancasti', added : false, key : '5' }, { name : 'La Gaceta', added : true, key : '6' },
                { name : 'El Cronista', added : true, key : '7' }, { name : 'TN', added : false, key : '8' },
                { name : 'Telám', added : true, key : 'Telam.com.ar' }, { name : 'Lavoz', added : false, key : 'Lavoz.com.ar' },
                { name : 'Pagina12', added : true, key : 'Pagina12.com.ar' }, { name : 'Filo News', added : false, key : 'Filo.news' },
                { name : 'Cien Radios', added : true, key : 'Cienradios.com' }, { name : 'Canalnet.tv', added : false, key : 'Canalnet.tv' },
                { name : 'Sputniknews', added : true, key : 'Sputniknews.com' }, { name : 'Filo.news', added : false, key : 'Filo.news' },
                { name : 'Minutoneuquen', added : true, key : 'Minutoneuquen.com' }, { name : 'Elintransigente', added : false, key : 'Elintransigente.com' }          
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

    const addOrRemoveSource = async source => {
        const changedSource = {
            name : source.name,
            key : source.key,
            added : !source.added
        };

        dispatch({
            type : ADD_SOURCE,
            payload : changedSource
        })        
        await AsyncStorage.setItem('listOfSources', JSON.stringify(state.listOfSources)); 
    }

    const updateListOfSources = async () => {        
        await AsyncStorage.setItem('listOfSources', JSON.stringify(state.listOfSources)); 
        dispatch({
            type : END_OF_UPDATE
        })
    }

    return (
        <SourceContext.Provider
            value={{
                listOfSources : state.listOfSources,
                loading : state.loading,
                update : state.update,
                loadListOfSources,
                addOrRemoveSource,
                updateListOfSources
            }}
        >
            {props.children}
        </SourceContext.Provider>
    )

}

export default SourceState;