import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Body, Title, Picker, Form, Left, Right } from 'native-base';
import Noticia from './Noticia';


const Noticas = (props) => { 
  
    const [noticias, guardarNoticias] = useState([]);
    const [categoriaSel, guardarCategoriaSel] = useState('');
  
    const consultarNoticias = async (categoria = 'general') => {      
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6589dee2f8644d609371d3d3c2371969`;
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    const handleChange = cat => {      
      guardarCategoriaSel(cat);
      consultarNoticias(cat);
    }

    useEffect( ()=> {
      consultarNoticias();
    }, []);

    return (                 
        <Container style={styles.container}>        
          
          <Header style={styles.header}>
            <Left style={{flexGrow : 1}}>
              <Button transparent onPress={() => props.navigation.toggleDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>          
            <Body style={{flexGrow: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Title>Últimas Noticas</Title>            
            </Body> 
            <Right style={{flexGrow : 1}}>
              <Button transparent onPress={() => props.navigation.toggleDrawer()}>
                <Icon name='menu' />
              </Button>
            </Right>         
          </Header>        
          <Content>

          <Card style={styles.cardFormulario}>
            <CardItem style={styles.headerEligaCategoria} >
                <Text style={styles.textEligaCategoria}>Eliga un Categoria</Text>
            </CardItem>
            <CardItem>
              <Form>
                <Picker
                  mode="dropdown"                  
                  iosIcon={<Icon name="arrow-down" />} 
                  style={{ width: Dimensions.get('window').width * .9}}                 
                  selectedValue={categoriaSel}
                  onValueChange={
                      (itemValue, itemIndex) => handleChange(itemValue)                                            
                  }
                >
                  <Picker.Item label="General" value="general" />
                  <Picker.Item label="Negocios" value="business" />
                  <Picker.Item label="Entretenimiento" value="entertainment" />
                  <Picker.Item label="Salud" value="health" />
                  <Picker.Item label="Ciencia" value="science" />
                  <Picker.Item label="Deportes" value="sports" />
                  <Picker.Item label="Tecnologia" value="technology" />

                </Picker>
              </Form>
            </CardItem>
          </Card>

          {noticias.map(noticia => (
              <Noticia  
                key={noticia.url}          
                noticia={noticia}
              />
          ))}

          
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
  headerEligaCategoria : {
    flexDirection: "row", 
    justifyContent: "center"    
  },
  textEligaCategoria : {
    fontWeight : 'bold'    
  },
  cardFormulario : {
    marginLeft : 10,
    marginRight : 10
  } 
});
 
export default Noticas;