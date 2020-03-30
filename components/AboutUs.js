import React, { useState, useContext, useEffect } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Body, Title, Picker, Form, Left, Right, Footer } from 'native-base';

const AboutUs = (props) => {
    return ( 
        <Container style={styles.container}>
            <Header style={styles.header}>
            <Left style={{flexGrow : 1}}>
                <Button transparent onPress={() => props.navigation.toggleDrawer()}>
                <Icon name='menu' />
                </Button>
            </Left>          
            <Body style={{flexGrow: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Title>Sobre Nosotros</Title>            
            </Body> 
            <Right style={{flexGrow : 1}}>
                <Button transparent onPress={() => props.navigation.toggleDrawer()}>
                <Icon name='menu' />
                </Button>
            </Right>         
            </Header>

            <Content>                
                <Card style={styles.cardFormulario}>
                    <CardItem style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Últimas Noticias</Text>                                                
                    </CardItem>
                    <CardItem style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Mantente informado todo el día con las últimas noticias</Text>                                                
                    </CardItem>                                                                                                                                                    
                </Card>
            </Content>

            <Footer style={styles.header}>
                <Body style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'white'}}>Desarrollo de Pablo Toledo</Text>            
                </Body>
            </Footer>

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
      marginRight : 10,
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: "center" 
    }    
  });
 
export default AboutUs;

