import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Noticias from './components/Noticias';
import Config from './components/Config';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Noticias">
        <Drawer.Screen name="Noticias" component={Noticias} />
        <Drawer.Screen name="Configuración" component={Config} />        
      </Drawer.Navigator>
    </NavigationContainer>    
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
