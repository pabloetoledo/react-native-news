import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Noticias from './components/Noticias';
import NoticiasPorPeriodico from './components/NoticiasPorPeriodico';
import Config from './components/Config';
import AboutUs from './components/AboutUs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SourceState from './context/source/sourceState';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <SourceState>
    <Fragment>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="NoticiasPorPeriodico">   
          <Drawer.Screen name="Explora tus diarios" component={NoticiasPorPeriodico} />     
          <Drawer.Screen name="Noticias" component={Noticias} />
          <Drawer.Screen name="Configuración" component={Config} />          
          <Drawer.Screen name="Sobre Nosotros" component={AboutUs} />                
      </Drawer.Navigator>      
    </NavigationContainer>        
    </Fragment>
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
