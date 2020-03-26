import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Noticias from './components/Noticias';

export default function App() {
  return (
    <Noticias/>    
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
