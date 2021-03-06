import React, { useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Picker, Image, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome";
import { useForm, Controller } from "react-hook-form";

const Location = () => {

  const [ufs, setUfs] = useState(false);
  const [city, setCities] = useState(false);

  const navigation = useNavigation();

  function navigateToListRestaurante() {
    navigation.navigate('ListRestaurant');
  }

  function navigateToLocation() {
    navigation.goBack();
  }

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const uf = response.data.map((uf) => ({
        "label": uf.sigla,
        "value": uf.sigla
      }));
      console.log(uf)
      setUfs(uf);
    });
  }, []);

  const { control, handleSubmit, errors } = useForm();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SUA
        <Text style={styles.titleBold}> LOCALIZAÇÃO</Text>
      </Text>
      <View style={styles.card}>
        <Text style={styles.letter}>ESTADO:</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <DropDownPicker style={styles.drop}
                            items={[(ufs)]}
                            containerStyle={{height: 40,  width: 250}}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={ufs => this.setState({
                              country: ufs.value
                            })}
                            placeholder="Selecione..."
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}/>
          )}
          name="uf"
          rules={{ required: true }}
          defaultValue=""
        />

        <Text style={styles.letter}>CIDADE:</Text>
        <DropDownPicker style={styles.drop}
                        items={[
                          {label: 'Novo Hamburgo', value: 'novoHamburgo'},
                          {label: 'São Leopoldo', value: 'saoLeopoldo'},
                        ]}
                        containerStyle={{height: 40, width: 250}}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={city => this.setState({
                          country: city.value
                        })}
                        placeholder="Selecione..."/>

        <View style={styles.arrows}>
          <TouchableOpacity style={styles.button} onPress={() => navigateToLocation()}>
            <Icon name={'arrow-circle-left'} size={30} color="#f74501" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateToListRestaurante()}>
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
    fontSize: 35,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 100
  },

  titleBold: {
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    width: 300,
    padding: 20,
    borderRadius: 40,
  },

  letter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 10,
    marginBottom: 5,
    marginTop: 20
  },

  drop: {
    width: 250,
    borderRadius: 50
  },

  arrows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
});

export default Location;
