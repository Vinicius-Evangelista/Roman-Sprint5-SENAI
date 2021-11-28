import React, {Component} from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
    <Text>
        teste cadastro
    </Text>
    )
  }
}

const styles = StyleSheet.create({
 

});