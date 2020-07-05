import React from "react";
import {View, Text, StyleSheet, Image, Button, TextInput, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import api from "../../services/api";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const navigation = useNavigation();

  const { control, handleSubmit, errors } = useForm();

  /*Login fixo para apresentação no hackaton, mas futuramento desenvolver uma api que comunique com o banco para validação e authenticação via token*/
  const onSubmit = async data => {
    console.log(data);
    console.log(data.user);
    console.log(data.pass);
    if (data.user === 'Roger' && data.pass === '1234') {
      navigation.navigate('Welcome');
    } else {
      alert('Usuario ou senha errada!');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/icon.png')} />
      <View style={styles.view}>
        <Icon style={styles.icon} name={'user'} size={30} color="#f74501" />
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput style={styles.letter} placeholderTextColor="#f74501" placeholder="NOME USUÁRIO"  onBlur={onBlur}
                       onChangeText={value => onChange(value)}
                       value={value}/>
          )}
          name="user"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}
      </View>

      <View style={styles.view}>
        <Icon style={styles.icon} name={'lock'} size={30} color="#f74501" />
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput style={styles.letter} secureTextEntry={true} placeholderTextColor="#f74501" placeholder="SENHA" v onBlur={onBlur}
                       onChangeText={value => onChange(value)}
                       value={value}/>
          )}
          name="pass"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}
      </View>
      <TouchableOpacity style={styles.button}  onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={styles.text}>CRIAR CONTA</Text>
      <Text style={styles.text}>OU FAÇA SEU LOGIN COM</Text>
      <View style={styles.login}>
        <Icon style={styles.iconFacebook} name={'facebook-square'} size={40} color="#f74501" />
        <Icon style={styles.iconGmail} name={'google-plus-square'} size={40} color="#f74501" />
      </View>
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
    marginLeft: 10,
    width: 280
  },

  button: {
    backgroundColor: '#f74501',
    width: 320,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20
  },

  textButton: {
    fontSize: 40,
    color: "#fff"
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f74501',
  },

  login: {
    display: 'flex',
    flexDirection: 'row'
  },

  iconFacebook: {
    color: 'blue'
  },

  iconGmail: {
    color: 'red',
    marginLeft: 20
  }
});

export default Login;
