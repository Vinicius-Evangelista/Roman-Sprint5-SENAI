import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack'; 

const AuthStack = createStackNavigator();

import Login from './src/screens/login';
import Main from './src/screens/main'
import CadastrarProjeto from './src/screens/cadastro'

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="BarraNavegacao"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <AuthStack.Screen name="Login" component={Login} /> */}
        <AuthStack.Screen name="BarraNavegacao" component={Main} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="CadastrarProjeto" component={CadastrarProjeto} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}