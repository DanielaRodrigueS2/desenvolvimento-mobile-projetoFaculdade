import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import TxtBtn from "../components/TxtBtn";

const Register = () => {

    return(
        <View style={estilos.view} >
    
    
        <Text style = {estilos.info}> E-mail </Text>

        <TextInput style = {estilos.txtInput} />
    
        <Text style = {estilos.info}> Senha </Text>
        <TextInput style = {estilos.txtInput}/>

        <Text style = {estilos.info}>  Repetir Senha </Text>
        <TextInput style = {estilos.txtInput}/>
    
    
        <TouchableOpacity  height = {30} style = {estilos.Btn}> 
            <Text style = {estilos.TxtBtn}>Cadastrar</Text>
        </TouchableOpacity>
    
        </View>
      );
}

const estilos = StyleSheet.create({


    view: {
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#372775',
      fontFamily: 'AveriaLibre-Regular',
      
    },
  
    info: {
      color:'white',
      fontSize: 15,
      alignSelf: 'start',
      marginLeft: 130,
      paddingTop:20,
      fontFamily: 'AveriaLibre-Regular',
    },
  
    txtInput: {
        backgroundColor: 'white',
        width: 400,
        height: 30,
        borderRadius: 5,
        fontFamily: 'AveriaLibre-Regular',
      },


    Btn:{
        marginTop:50,
        backgroundColor: '#37BD6D',
        height: 40,
        width: 400,
        borderRadius: 5,
    },

    TxtBtn:{
        color: 'white',
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
    }
    
    
  })

export default Register