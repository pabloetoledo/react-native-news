import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Noticias from './components/Noticias';
import Config from './components/Config';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SourceState from './context/source/sourceState';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <SourceState>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Noticias">        
          <Drawer.Screen name="Noticias" component={Noticias} />
          <Drawer.Screen name="Configuración" component={Config} />                
      </Drawer.Navigator>
    </NavigationContainer>    
    </SourceState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#039be5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
