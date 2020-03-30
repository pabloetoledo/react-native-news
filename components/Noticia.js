import React, { useEffect, useState, useContext, } from 'react';
import { Image, View, StyleSheet, Linking  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Subtitle } from 'native-base';

const Noticia = ({noticia}) => {   

    //extraer los datos de las noticas
    const {urlToImage, url, title, description, source} = noticia;     

    return ( 
        <Card style = { styles.card}>            
            <CardItem header bordered>
              <Image 
                 source={{
                    uri: urlToImage,
                 }} 
                 style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem bordered>                                                                   
              <Body>
                  <Text style={styles.titulo}>
                    {title}
                  </Text>
                  <Text>
                    {description}
                  </Text>  
              </Body>
            </CardItem>
            <CardItem footer>  
                <Body style={styles.bodyCardItem}>
                    <Button style={styles.botonVerNoticia} onPress={() => { Linking.openURL(url)}}>                                    
                        <Text>VER NOTICIA COMPLETA</Text>
                    </Button>                            
                </Body>                                         
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    titulo: {
      fontWeight : "bold",
      marginBottom : 10,
      fontSize: 19
    },
    bodyCardItem : {        
        flexDirection: "row", 
        justifyContent: "center"       
    },
    botonVerNoticia : {
        backgroundColor : '#26a69a'        
    },
    card : {
        marginLeft : 10,
        marginRight : 10
    }    
});
 
export default Noticia;