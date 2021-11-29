import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import api from '../services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProjetos: [],
    };
  }

  buscarProjetos = async () => {
    try {
       // debugger;
    const r = await api.get('/Usuarios/Projetos/Listar');
    //  console.warn(r);
    const dadosDaApi = r.data;
    this.setState({listaProjetos: dadosDaApi});
    } catch (error) {
      console.warn(error);
    }
  }

  componentDidMount() {
    this.buscarProjetos();
  }
  
  render() {
    return (
      <View style={styles.main}>
      {/* Cabeçalho - Header */}
      <View style={styles.mainHeader}>
        <View style={styles.mainHeaderRow}>
          <Text style={styles.mainHeaderText}>{'Projetos'.toUpperCase()}</Text>
        </View>

        <View style={styles.mainHeaderLine}></View>
      </View>

      {/* Corpo - Body */}
      <View style={styles.mainBody}>
        <FlatList
          contentContainerStyle={styles.mainBodyContent}
          data={this.state.listaProjetos}
          keyExtractor={item => item.idProjeto}
          renderItem={this.renderItem}
        />
      </View>
    </View>
  );
}

renderItem = ({item}) => (
  // <Text style={{ fontSize: 20, color: 'red' }}>{item.nomeEvento}</Text>

  <View style={styles.flatItemRow}>
    <View style={styles.flatItemContainer}>
      <Text style={styles.flatItemTitle}>{item.nomeProjeto}</Text>
      <Text style={styles.flatItemInfo}>{item.descricao}</Text>

      <Text style={styles.flatItemInfo}>
        {Intl.DateTimeFormat("pt-BR", {
                          year: 'numeric', month: 'short', day: 'numeric',
                          hour: 'numeric', minute: 'numeric', hour12: true
                      }).format(new Date(item.dataCriacao))}
      </Text>
    </View>

    <View style={styles.footer}>
     
    </View>
  </View>

    );
  }

  const styles = StyleSheet.create({
    // conteúdo da main
    main: {
      flex: 1,
      backgroundColor: '#F1F1F1',
      height: 0.3
    },
    // cabeçalho
    mainHeader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DAD6D6' //a
    },
    mainHeaderRow: {
      flexDirection: 'row',
      color: '#EFEFEF',
     
    },
    // imagem do cabeçalho
    mainHeaderImg: {
      width: 22,
      height: 22,
      tintColor: '#ccc',
      marginRight: -5,
      marginTop: -12,
      backgroundColor: 'red'
    },
    // texto do cabeçalho
    mainHeaderText: {
      fontSize: 16,
      letterSpacing: 5,
      color: '#999',
      backgroundColor: '' //projeto
    },
    // linha de separação do cabeçalho
    mainHeaderLine: {
      width: 220,
      paddingTop: 10,
      borderBottomColor: '#999',
      borderBottomWidth: 1,
     
    },
  
    // conteúdo do body
    mainBody: {
      flex: 4,
    },
    // conteúdo da lista
    mainBodyContent: {
      paddingTop: 30,
      paddingRight: 50,
      paddingLeft: 50,
    },
    // dados do evento de cada item da lista (ou seja, cada linha da lista)
    flatItemRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginTop: 40,
    },
    flatItemContainer: {
      flex: 1,
    },
    flatItemTitle: {
      fontSize: 16,
      color: '#333',
    },
    flatItemInfo: {
      fontSize: 12,
      color: '#999',
      lineHeight: 24,
    },
    flatItemImg: {
      justifyContent: 'center',
    },
    flatItemImgIcon: {
      width: 26,
      height: 26,
      tintColor: '#B727FF',
    },
    footer: {
      backgroundColor: '#226089'
    }
  });