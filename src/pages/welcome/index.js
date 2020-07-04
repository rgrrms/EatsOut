import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation = useNavigation();

  function navigateToLocation() {
    navigation.navigate('Location');
  }

  function navigateToLogin() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.titleBold}>BEM VINDO AO EATS</Text>
        OUT
      </Text>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../../assets/icon-09.png')} />
        <Text style={styles.letter}>Olá, seja bem vindo ao EatsOut, aqui você irá encontrar uma seleção dos estabelecimentos mais próximos
          para realizar sua refeição com segurança e sem aglomerações.</Text>
        <View style={styles.arrows}>
          <TouchableOpacity style={styles.button} onPress={() => navigateToLogin()}>
            <Icon name={'arrow-circle-left'} size={30} color="#f74501" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateToLocation()}>
            <Icon name={'arrow-circle-right'} size={30} color="#f74501" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#f74501'
  },

  title: {
    fontSize: 45,
    textAlign: 'center',
    color: '#fff'
  },

  titleBold: {
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    height: 550,
    padding: 20,
    borderRadius: 40,
  },

  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
    resizeMode: 'contain',
    marginLeft: 10
  },

  arrows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  letter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f74501',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20
  },
});


export default Welcome;
