import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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


        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  main: {
    alignItems: 'center',
    backgroundColor: 'white'
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
    fontSize: 30

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
    justifyContent : 'flex-start',
  },

});