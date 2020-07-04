import React from "react";
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";

const ListRestaurant = () => {

  const navigation = useNavigation();

  function  navigateToRestaurant(key) {
    navigation.navigate('Restaurant', {key});
  }

  const dados = [
    {key: 'Restaurante 1'},
    {key: 'Restaurante 2'},
    {key: 'Restaurante 3'},
    {key: 'Restaurante 4'},
    {key: 'Restaurante 5'},
    {key: 'Restaurante 6'},
    {key: 'Restaurante 7'},
    {key: 'Restaurante 8'},
    {key: 'Restaurante 9'},
    {key: 'Restaurante 10'},
    {key: 'Restaurante 20'},
    {key: 'Restaurante 30'},
    {key: 'Restaurante 40'},
    {key: 'Restaurante 50'},
    {key: 'Restaurante 60'},
    {key: 'Restaurante 70'},
    {key: 'Restaurante 80'},
    {key: 'Restaurante 90'},
  ]

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={dados}
        renderItem={({item}) => <Text onPress={() => navigateToRestaurant(item.key)} style={styles.item}>{item.key}</Text>}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center'
  },

  item: {
    backgroundColor: 'orange',
    width: 300,
    margin: 10,
    fontSize: 30,
    padding: 10,
    borderRadius: 10
  }
});

export default ListRestaurant;
