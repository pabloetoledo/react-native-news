import React, { useEffect, useState, useContext } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Body, Title, Picker, Form, Left, Right } from 'native-base';
import Noticia from './Noticia';

import xml2js from 'xml2js';


const NoticasPorPeriodico = (props) => { 
  
    const [noticias, guardarNoticias] = useState([]);    
    const [rssSel, guardarRssSel] = useState('');     
  
    const consultarNoticias = async (rss = 'https://www.clarin.com/rss/lo-ultimo/') => {                   

      const processRSS = () => {
          const proxyurl = "https://cors-anywhere.herokuapp.com/";
          fetch(proxyurl + rss)
          .then(response => response.text())
          .then(data => (new window.DOMParser()).parseFromString(data, "text/xml"))
          .then(function(data){
              let articles = [];
              let article;                                         
              let image;                            
              let description;
              
              let items = data.getElementsByTagName("item");            
              
              for(let i=0; i<items.length; i++){  

                image = items[i].getElementsByTagName('image').length > 0 
                    ? items[i].getElementsByTagName('image')[0].textContent 
                    : items[i].getElementsByTagName('enclosure').length > 0 
                      ? items[i].getElementsByTagName('enclosure')[0].attributes[0].value 
                      : ''; 

                article = {
                  title : items[i].getElementsByTagName('title')[0].textContent,
                  description : items[i].getElementsByTagName('description')[0].textContent,
                  url : items[i].getElementsByTagName('link')[0].textContent,
                  urlToImage : image
                };
                articles.push(article);                
              }

              items = data.getElementsByTagName("entry");                  

              for(let i=0; i<items.length; i++){                 
                      
                description = items[i].getElementsByTagName('content')[0].getElementsByTagName('div')[0].textContent;                    
                image = items[i].getElementsByTagName('img')[0].attributes[0].value;                

                article = {
                  title : items[i].getElementsByTagName('title')[0].textContent,
                  description : description,
                  url : items[i].getElementsByTagName('id')[0].textContent,
                  urlToImage : image
                };
                articles.push(article);                
              }


              if(articles.length > 0){
                guardarNoticias(articles);
                return;
              }
              
          }                                
        );
      }  
      
      processRSS();
    }   

    const handleChange = cat => {      
      guardarRssSel(cat);
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
              <Title>Noticias por Periódico</Title>            
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
                <Text style={styles.textEligaCategoria}>Selecciona un periódico</Text>
            </CardItem>
            <CardItem>
              <Form>
                <Picker
                  mode="dropdown"                  
                  iosIcon={<Icon name="arrow-down" />} 
                  style={{ width: Dimensions.get('window').width * .9}}                 
                  selectedValue={rssSel}
                  onValueChange={
                      (itemValue, itemIndex) => handleChange(itemValue)                                            
                  }
                >                  
                  <Picker.Item label="Clarín" value="https://www.clarin.com/rss/lo-ultimo/" />
                  <Picker.Item label="TN" value="https://tn.com.ar/rss.xml" />
                  <Picker.Item label="El Ancasti" value="https://www.elancasti.com.ar/rss/feed.html?r=9" />
                  <Picker.Item label="Clarín Mundo" value="https://www.clarin.com/rss/mundo/" />
                  <Picker.Item label="Olé" value="https://www.ole.com.ar/rss/ultimas-noticias/" />
                  <Picker.Item label="Olé Boca" value="https://www.ole.com.ar/rss/boca-juniors/" />
                  <Picker.Item label="Olé Liga España" value="https://www.ole.com.ar/rss/futbol-internacional/espana/" />                  

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
 
export default NoticasPorPeriodico;