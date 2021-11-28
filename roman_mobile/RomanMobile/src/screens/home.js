import React, {Component} from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
    <Text>
        teste home
    </Text>
    )
  }
}

const styles = StyleSheet.create({
 

});