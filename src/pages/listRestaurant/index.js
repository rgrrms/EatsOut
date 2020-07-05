import React, {useState} from "react";
import {Image, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ListRestaurant = () => {
  const navigation = useNavigation();

  function navigateToRestaurant(dado) {
    navigation.navigate('Restaurant', { dado });
  }

  //dados fixos para apresentação no hackaton, mas futuramento desenvolver uma api que comunique com o banco para buscar os dados*/
  const dados = [
    {key: '1', name: 'Restaurante 1', time: '11:21', color: 'green', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '2', name: 'Restaurante 2', time: '12:22', color: 'yellow', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '3', name: 'Restaurante 3', time: '13:23', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '4', name: 'Restaurante 4', time: '14:24', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '5', name: 'Restaurante 5', time: '15:25', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '6', name: 'Restaurante 6', time: '16:26', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '7', name: 'Restaurante 7', time: '17:27', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '8', name: 'Restaurante 8', time: '18:28', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '9', name: 'Restaurante 9', time: '19:29', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '10', name: 'Restaurante 10', time: '11:21', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '20', name: 'Restaurante 20', time: '12:22', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '30', name: 'Restaurante 30', time: '13:23', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '40', name: 'Restaurante 40', time: '14:24', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '50', name: 'Restaurante 50', time: '15:25', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '60', name: 'Restaurante 60', time: '16:26', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '70', name: 'Restaurante 70', time: '17:27', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '80', name: 'Restaurante 80', time: '18:28', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {key: '90', name: 'Restaurante 90', time: '19:29', color: 'red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ]

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

        <FlatList
          style={styles.card}
          data={dados}
          keyExtractor={dado => dado.key}
          renderItem={({item}) =>
            <View style={styles.space}>
              <View style={styles.cardIntern}>
                <Image style={styles.logo} source={require('../../../assets/splash.png')} />
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.time}>Abre as {item.time}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigateToRestaurant(dados)}>
                  <Icon style={styles.iconToPage} name={'arrow-circle-right'} size={40} color="#ffc909" />
                </TouchableOpacity>
                <View style={[styles.dot, {backgroundColor: item.color}]} ></View>
              </View>
              <Text style={styles.letterCard}>
                {item.description}
              </Text>
            </View>}
        />
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

  space: {
    backgroundColor: '#DDDDDD',
    width: 330,
    margin: 10,
    fontSize: 30,
    padding: 10,
    borderRadius: 30
  },

  cardIntern: {
    display: 'flex',
    flexDirection: 'row',

  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
    borderRadius: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 30,
    marginTop: 10
  },

  iconToPage: {
    marginTop: 10,
    marginRight: 25
  },

  dot: {
    width: 10,
    height: 10,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#ffc909',
  },

  letterCard: {
    marginBottom: 10,
    marginLeft: 10
  }
});

export default ListRestaurant;
