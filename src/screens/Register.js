import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from "react-native";


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
      marginLeft: '20%',
      paddingTop: '4%',
      fontFamily: 'AveriaLibre-Regular',
    },
  
    txtInput: {
        backgroundColor: 'white',
        width: '60%',
        height: 30,
        borderRadius: 5,
        fontFamily: 'AveriaLibre-Regular',
      },


    Btn:{
        marginTop:'5%',
        backgroundColor: '#37BD6D',
        height: '12%',
        width: '60%',
        borderRadius: 5,
    },

    TxtBtn:{
        color: 'white',
        alignSelf: 'center',
        paddingTop: '1.5%',
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
    }
    
    
  })

export default Register