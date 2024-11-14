import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TxtBtn from '../components/TxtBtn';




const Login = (props) => {
  

  const goToRegister = () => {
    props.navigation.navigate('Register')
  }

  const goToHome = () => {
    props.navigation.navigate("Drawer")
  }

  const goToRecSenha = () => {
    props.navigation.navigate("RecuperacaoSenha")
  }

  return(
    <View style={estilos.view} >

    <Text style={estilos.title} >Satisfying.you</Text>

    <Text style = {estilos.info}> E-mail  </Text>
    <TextInput style = {estilos.txtInput} />

    <Text style = {estilos.info}> Senha </Text>
    <TextInput style = {estilos.txtInput}/>

    <TxtBtn texto = "Entrar" background = "#37BD6D" height = {40} onPress={goToHome}/>

    <TxtBtn texto = "Criar conta" background= "#419ED7"height = {30} onPress={goToRegister}/>

    <TxtBtn texto = "Esqueci minha senha" background= "#B5C7D1" height = {30} onPress={goToRecSenha}/>

    </View>
  );
};

const estilos = StyleSheet.create({


  view: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#372775',
    padding: 25,
    fontFamily: 'AveriaLibre-Regular',
    
  },

  title: {
    alignItems: 'center',
    fontSize: 30,
    color:'white',
    fontFamily: 'AveriaLibre-Regular',
    
  },

  info: {
    color:'white',
    fontSize: 15,
    marginRight: 350,
    marginBottom: -15,
    fontFamily: 'AveriaLibre-Regular',
  },

  txtInput: {
    backgroundColor: 'white',
    width: 400,
    height: 30,
    borderRadius: 5,
    fontFamily: 'AveriaLibre-Regular',
  },


})

export default Login