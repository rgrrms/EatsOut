import React from "react";
import {StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, FlatList, Image} from "react-native";
import { RadioButton } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";

const Restaurant = () => {
  const [value, setValue] = React.useState('first');
  const route = useRoute();

  const dado = route.params.dado;
  console.log(dado);
  console.log(dado.name);

  return (
    <ScrollView>
      <View style={styles.menuBar}>
        <Icon style={styles.iconBar} name={'bars'} size={30} color="#fff" />
      </View>
      <View style={styles.container}>
        <View style={styles.search}>
          <View style={styles.input}>
            <Icon style={styles.icon} name={'search'} size={30} color="#fff" />
            <TextInput style={styles.letter}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigateToLocation()}>
            <Icon name={'pencil'} size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.containeTitle}>
          <Text style={styles.title}>Restaurante 1</Text>
          <View style={styles.status}>
            <Text>Aberto</Text>
            <View style={styles.dot}></View>
          </View>
        </View>
        <Image style={styles.logo} source={require('../../../assets/splash.png')} />
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textMenu}>DATA</Text>
          <Icon name={'arrow-circle-right'} size={40} color="#ffc909" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textMenu}>HORÁRIO</Text>
          <Icon name={'arrow-circle-right'} size={40} color="#ffc909" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textMenu}>NÚMERO DE PESSOAS</Text>
          <Icon name={'arrow-circle-right'} size={40} color="#ffc909" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textMenu}>MENU</Text>
          <Icon name={'arrow-circle-right'} size={40} color="#ffc909" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textMenu}>MESA</Text>
          <Icon name={'arrow-circle-right'} size={40} color="#ffc909" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reservation}>
          <Text style={styles.textButton}>RESERVAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconBar: {
    marginTop: 20,
    marginLeft: 8,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#cc3b04',
    borderRadius: 50,
    width: 50,
    height: 50
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  menuBar: {
    paddingTop: 30,
    backgroundColor: '#f74501',
  },

  search: {
    width: 360,
    backgroundColor: '#ffc909',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between'
  },

  input: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e6b609',
    width: 300,
    padding: 5,
    borderRadius: 15
  },

  letter: {
    width: 250,
    marginLeft: 10,
    fontSize: 20
  },

  button: {
    paddingTop: 5
  },

  dot: {
    width: 10,
    height: 10,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'green',
  },

  letterCard: {
    marginBottom: 10,
    marginLeft: 10
  },

  logo: {
    height: 180,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 60
  },

  description: {
    marginHorizontal: 20,
    marginVertical: 5
  },

  status: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12
  },

  containeTitle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },

  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginBottom: 10
  },

  textMenu: {
    fontWeight: 'bold',
    fontSize: 20
  },

  reservation: {
    backgroundColor: '#f74501',
    padding: 10,
    borderRadius: 40,
    marginBottom: 15,
    width: 200
  },

  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
  }
});

export default Restaurant;
