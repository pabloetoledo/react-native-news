import React, { useState, useContext, useEffect } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Body, Title, Picker, Form, Left, Right } from 'native-base';
import SourceContext from '../context/source/sourceContext';

const Config = (props) => {
    
    const sourceContext = useContext(SourceContext);

    const {listOfSources, loadListOfSources, addOrRemoveSource} = sourceContext;

    const handleSelectedSource = source => {
        addOrRemoveSource(source);
    }

    useEffect( () => {
        loadListOfSources();
    }, [])

    return ( 
        <Container style={styles.container}>
            
            <Header style={styles.header}>
            <Left style={{flexGrow : 1}}>
                <Button transparent onPress={() => props.navigation.toggleDrawer()}>
                <Icon name='menu' />
                </Button>
            </Left>          
            <Body style={{flexGrow: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Title>Configuración</Title>            
            </Body> 
            <Right style={{flexGrow : 1}}>
                <Button transparent onPress={() => props.navigation.toggleDrawer()}>
                <Icon name='menu' />
                </Button>
            </Right>         
            </Header>  

            <Content>                
                <Card style={styles.cardFormulario}>
                    <CardItem >
                        <Text>Diarios y Fuentes</Text>
                    </CardItem>
                    <CardItem style={styles.diarios}>
                        { 
                            listOfSources.map(source => (
                                <Button 
                                     iconRight style={ source.added ? styles.diario : styles.diarioNoSeleccionado} 
                                     key={source.key} 
                                     onPress={ ()=> handleSelectedSource(source)}                                                                                                         
                                     >
                                    <Text>{source.name}</Text>
                                    <Icon name={ source.added ? 'checkmark' : 'add' }/>
                                </Button>
                            ))
                        }                       
                    </CardItem>
                                                                                                            
                </Card>
            </Content>

        </Container>
    );
}

const styles = StyleSheet.create({
    container: {    
      backgroundColor: '#fff'
    },
    header: {
      marginTop : 31,
      backgroundColor : '#0277bd',
      flexDirection: "row", 
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: "center"    
    },         
    cardFormulario : {
      marginLeft : 10,
      marginRight : 10
    },
    diarios : {
        display : 'flex',
        flexWrap: 'wrap'        
    },
    diario : {
        flexGrow : 1,
        width : 120,
        backgroundColor : 'blue',
        color : 'white',
        fontWeight : 'bold',
        margin : 5
    },
    diarioNoSeleccionado : {
        flexGrow : 1,
        width : 120,
        backgroundColor : 'grey',
        color : 'black',
        fontWeight : 'bold',
        margin : 5
    }       

  });
 
export default Config;