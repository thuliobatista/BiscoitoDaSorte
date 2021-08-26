import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { Button } from 'react-native';


const App = () => {

    const frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'o riso é a menor distancia entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbivio, pense no improvavel e conquiste o impossível.',
      'Acredite em milagres,mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'Tomar uma atitude é o primeiro passo para dar vida ao sonho.'

    ];

    const [image, setImage] = useState(require('./imagens/biscoito.png'));
    const [text, setText] = useState('');

    const quebrar  = () =>{
      setText('"' + frases[Math.floor(Math.random() * frases.length)] + '"');
      setImage(require('./imagens/biscoitoQuebrado.png'))
    }

    const desquebrar  = () =>{
      setText('');
      setImage(require('./imagens/biscoito.png'))
    }

    return (
      <View style={styles.container}>

        <Image
          style={styles.image}
          source={image}
        />

        <Text style={styles.text}>
          {text}
        </Text>
        
        <Button
        title ="Quebar biscoito da Sorte "
        onPress={quebrar}>
        </Button>
        <br></br>
        <Button
        title ="Resetar "
        onPress={desquebrar}>
        </Button>

        </View>
        );

  }

export default App;

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
  }, 
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 20,
    color: '#F79F81',
   
  },

  
});
