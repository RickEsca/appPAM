import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './Styles';

export default function TelaRotas() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Personagens Principais:</Text>
      <Image
      style={estilo.img2}
      source={require('../assets/luffy.png')}
      />
       <Image
      style={estilo.img2}
      source={require('../assets/zoro.jpeg')}
      />
       <Image
      style={estilo.img2}
      source={require('../assets/nami.jpg')}
      />
       <Image
      style={estilo.img2}
      source={require('../assets/sanji.png')}
      />

    </View>
  );
}