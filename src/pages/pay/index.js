import React from "react";
import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Pay = () => {
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
        <Text style={styles.title}>CARTÃO DE CRÉDITO</Text>
        <View style={styles.card}>
          <Text style={styles.nCard}>4356 xxxx xxxx 1324</Text>
          <View style={styles.infoCard}>
            <Text>MYLENNE LIMA</Text>
            <Text>06/24</Text>
          </View>
        </View>
        <Icon style={styles.car} name={'shopping-cart'} size={50} color="#000" />
        <Text style={styles.total}>TOTAL</Text>
        <Text style={styles.price}>R$38,00</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>PAGAR</Text>
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

  title: {
    fontSize: 30,
    margin: 20
  },

  card: {
    width: 300,
    height: 180,
    borderRadius: 5,
    backgroundColor: '#f74501',
    marginBottom: 40
  },

  nCard: {
    marginTop: 90,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },

  infoCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },

  car: {
    color: '#f74501',
    padding: 10,
    borderColor: '#f74501',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 30
  },

  total: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10
  },

  price: {
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 10
  },

  button: {
    backgroundColor: '#f74501',
    width: 220,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginBottom: 70
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#fff"
  },

  buttonPencil: {
    paddingTop: 5
  }
});

export default Pay;
