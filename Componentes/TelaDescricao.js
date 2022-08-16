import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaDescricao () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        O Dango Balango era uma série da tv cultura
      </Text>

      <Text style={estilo.texto}>
        Olho de cobra, bunda de calango... Dango Balango
      </Text>
    </View>
  );
}