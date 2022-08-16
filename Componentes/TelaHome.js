import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './Styles';

export default function TelaHome() {
  return (
    <View style={estilo.container}>
           <Image
      style={estilo.img}
      source={require('../assets/piratinha.jpg')}
      />
      <Text style={estilo.titulo}>One Piece</Text>
      <Text style={estilo.txt}>Autor: Eiichiro Oda 
        <br></br>
        Volumes: 103
        <br></br>
        Demografia: Shonen (adolescente masculino)
        <br></br>
        Período de publicação: 19 de julho de 1997 – presente
        <br></br>
        Revistas: Weekly Shōnen Jump</Text>
        
    </View>
  );
}