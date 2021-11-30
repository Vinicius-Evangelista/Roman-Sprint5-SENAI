import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {

      //States
      idTema: 0,
      nomeProjeto: '',
      descricao: '',
      dataCriacao: new Date(),

    };
  }



  render() {
    return (
      <View style={styles.main}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastrar Projeto</Text>
        </View>

        <View style={styles.boxInputs}>

          <TextInput
            style={styles.cadastroInputs}
            placeholder="Nome projeto:"
            placeholderTextColor={'black'}
          />

          <TextInput
            style={styles.cadastroInputs}
            placeholder="Tema:"
            placeholderTextColor={'black'}
          />


          <TextInput
            multiline
            style={styles.cadastroInputsDescricao}
            placeholder="Descricao:"
            placeholderTextColor={'black'}
          />

        <Pressable style = {styles.cadastroButton}>
          <Text style = {styles.cadastroButtonText}>Cadastrar</Text>
        </Pressable>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  main: {
    alignItems : 'center',
    backgroundColor: 'white',
    flex : 1
  },


  header: {
    backgroundColor: '#EFEFEF',
    width: 410,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerText: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 30,
    color : '#444343'

  },

  boxInputs : {
    alignItems : 'center',
    justifyContent : 'space-around',
    flex : 1
  },

  cadastroInputs: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 21,
    width: 317,
    height: 55,
    backgroundColor: '#8FB7C6',
    borderRadius: 31,
    paddingLeft: 30
  },

  cadastroInputsDescricao: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 21,
    width: 317,
    height: 151.04,
    backgroundColor: '#8FB7C6',
    borderRadius: 31,
    textAlignVertical: 'top',
    paddingLeft: 32,
    paddingRight: 32
  },

  cadastroButton: {
    width: 177,
    height: 61,
    backgroundColor : '#226089',
    paddingLeft : 14,
    paddingTop : 10,
  },

  cadastroButtonText : {
   fontSize : 31,
   color : 'white',
   fontFamily: 'RedHatDisplay-Bold',
  } 

});