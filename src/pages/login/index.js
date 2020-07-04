import React from "react";
import {View, Text, StyleSheet, Image, Button, TextInput, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  function navigateToWelcome() {
    navigation.navigate('Welcome');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/icon.png')} />
      <View style={styles.view}>
        <Icon style={styles.icon} name={'user'} size={30} color="#f74501" />
        <TextInput style={styles.letter} placeholderTextColor="#f74501" placeholder="NOME USUÁRIO"/>
      </View>
      <View style={styles.view}>
        <Icon style={styles.icon} name={'lock'} size={30} color="#f74501" />
        <TextInput style={styles.letter} placeholderTextColor="#f74501" placeholder="SENHA"/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigateToWelcome()}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center'
  },

  logo: {
    width: 192,
    height: 192,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  view: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#f74501',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    width: 300,
    marginBottom: 10
  },

  icon: {
    marginTop: 6,
    marginLeft: 20
  },

  letter: {
    fontSize: 30,
    marginLeft: 10
  },

  button: {
    backgroundColor: '#f74501',
    width: 320,
    borderRadius: 20,
    alignItems: 'center'
  },

  textButton: {
    fontSize: 40,
    color: "#fff"
  }
});

export default Login;
