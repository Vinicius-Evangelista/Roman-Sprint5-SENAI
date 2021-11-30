import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack'; 

const AuthStack = createStackNavigator();

import Login from './src/screens/login';
import CadastrarProjeto from './src/screens/cadastro'
import BarraNavegacao from './src/screens/barranavegacao'

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="Cadastrar-Projeto"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Barra-de-navegacao" component={BarraNavegacao} />
        <AuthStack.Screen name="Cadastrar-Projeto" component={CadastrarProjeto} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}