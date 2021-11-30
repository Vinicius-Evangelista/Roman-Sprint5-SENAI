import React, { Component } from 'react';

//Components React-Native
import {
    Image,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//não pode usar o component direto, então temos que armazenar em uma variável.
const bottomTab = createBottomTabNavigator();

//Components Locais
import CadastrarProjetos from './cadastro';
import Home from './login';
import Perfil from './perfil';


export default class BarraNavegacao extends Component {
    render(){
        return(

            <View style = {styles.main}>
                <StatusBar
                hidden = {false}
                backgroundColor = '#226089'
                />

                <bottomTab.Navigator 
                initialRouteName = "Cadastrar-Projeto"
                
                screenOptions = {({route}) => ({

                // ?
                tabBarIcon: () => {
                    switch (route.name) {
                        case 'Cadastrar-Projeto':
                      
                                <Image source = {require('../assets/pen-icon.png')}
                                style = {styles.tabBarIcon}
                                />
                            break;
                    
                        default:
                            break;
                    }
                },


                })}
                />   
            </View>
        );
    }
};

const styles = StyleSheet.create({

    main : {
        flex : 1,
        backgroundColor: '#F1F1F1'
    },

    tabBarIcon : {
        width: 22,
        height: 22
    }

})