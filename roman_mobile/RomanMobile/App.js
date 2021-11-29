import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import Login from './src/screens/login';
import Home from './src/screens/home';
import Perfil from './src/screens/perfil';
// import CameraPerfil from './src/screens/camera';

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="Perfil" component={Perfil} />
        {/* <AuthStack.Screen name="Camera" component={CameraPerfil} /> */}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}