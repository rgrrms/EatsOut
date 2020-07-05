import React from "react";
import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const dados = [
    {key: '1', title: 'Carne de sol na Nata', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '31,00'},
    {key: '2', title: 'Carne com arroz', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '29,00'},
    {key: '3', title: 'Cachorro Quente', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '15,00'},
    {key: '4', title: 'Carne de sol na Nata', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '31,00'},
    {key: '5', title: 'Carne de sol na Nata', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '31,00'},
    {key: '6', title: 'Carne de sol na Nata', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '31,00'},
    {key: '7', title: 'Carne de sol na Nata', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '31,00'},
    {key: '8', title: 'Xis', description: 'Acompanha arroz branco, macaxeira frita e farofa na manteiga.', price: '31,00'},
  ]

  function navigateToPay() {
    navigation.navigate('Pay');
  }

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
          <TouchableOpacity style={styles.buttonPencil} onPress={() => navigateToLocation()}>
            <Icon name={'pencil'} size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Pratos Individuais</Text>
        <FlatList
          data={dados}
          keyExtractor={dado => dado.key}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => navigateToPay()} style={styles.card}>
              <View>
                <Text style={styles.titleCard}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.price}>A partir de R$ {item.price}</Text>
              </View>
              <Image style={styles.plate} source={require('../../../assets/splash.png')}/>
            </TouchableOpacity>}
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

  title: {
    fontSize: 20,
    margin: 10
  },

  card: {
    display: 'flex',
    flexDirection: 'row',
    width: 240,
    margin: 10,
  },

  titleCard: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  price: {
    marginTop: 25
  },

  plate: {
    width: 100,
    height: 100
  },

  buttonPencil: {
    paddingTop: 5
  },
});

export default Menu;
