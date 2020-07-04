import React from "react";
import { StyleSheet, Text, TextInput, View, ScrollView} from "react-native";
import { RadioButton } from 'react-native-paper';

const Restaurant = () => {
  const [value, setValue] = React.useState('first');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.ad}>Estamos tomando todos os cuidados necessarios para que sua refeição possa acontecer
        da melhor forma, contamos tambem com sua colaboração na utilização de alcool e mascara
        ate o momento em que iniciar sua refeição. Lembra que as mesas só podem ser utilizadas
        com metade de sua capacidade para mantermos o distanciamento.
      </Text>
      <Text style={styles.letter}>Data:</Text>
      <TextInput />
      <Text style={styles.letter}>Horario:</Text>
      <TextInput />
      <Text style={styles.letter}>Mesa</Text>
      <TextInput />
      <Text style={styles.letter}>Numero de pessoas</Text>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <View style={styles.radio}>
          <Text style={styles.letter}>1</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text style={styles.letter}>2</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>
      <Text style={styles.letter}>Email</Text>
      <TextInput />
      <Text style={styles.letter}>Nome</Text>
      <TextInput />
      <Text style={styles.letter}>Telefone</Text>
      <TextInput />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
    marginLeft: 10
  },

  letter: {
    fontSize: 20,
    margin: 20
  },

  radio: {
    display: 'flex',
  }

});

export default Restaurant;
