import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Subtitle } from 'native-base';
import Noticia from './Noticia';

const Noticas = () => { 
  
    const [noticias, guardarNoticias] = useState([]);
  
    const consultarNoticias = async (categoria = 'general') => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6589dee2f8644d609371d3d3c2371969`;
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    consultarNoticias();

    return (                 
        <Container style={styles.container}>        
        <Header style={styles.header}>          
          <Body style={styles.textHeader}>
            <Title >Últimas Noticas</Title>            
          </Body>          
        </Header>

        <Content>

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
    backgroundColor : '#0277bd'    
  },
  textHeader : {
    flexDirection: "row", 
    justifyContent: "center"    
  }
});
 
export default Noticas;