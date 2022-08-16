import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native-web";

import TelaHome from "./Componentes/TelaHome";
import TelaDescricao from "./Componentes/TelaDescricao";
import TelaRotas from "./Componentes/TelaRotas";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MenuTabs = createBottomTabNavigator();

export default function App() {
  return (    
      <NavigationContainer>
        <MenuTabs.Navigator>
          <MenuTabs.Screen name='One Piece' component={TelaHome}/>
          <MenuTabs.Screen name='Personagens' component={TelaRotas}/>
          <MenuTabs.Screen name='BalangoDango' component={TelaDescricao}/>
        </MenuTabs.Navigator>
      </NavigationContainer>
  );
}