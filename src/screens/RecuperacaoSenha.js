import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const RecuperacaoSenha = (props) =>{

    const [email, setEmail] = useState('')

    const goToLogin = () =>{
        props.navigation.navigate('Login')
    }

    const goBack = () =>{
        props.navigation.goBack()
    }

    return(

        <View id="Principal" style={estilo.Principal}>

            <View id="header" style={estilo.Header}>

                <TouchableOpacity onPress={goBack}>
                    <Icon style={estilo.menu} name="arrow-back" size = {40} color = "#573FBA" />
                </TouchableOpacity>

                <Text style={estilo.textoGrande}>Recuperação de senha</Text>
            </View>

            <View id="main" style={estilo.Main}>

                <View id="email" style={estilo.email}>
                    <Text style={estilo.textoNormal}>E-mail</Text>
                    <TextInput value={email} onChangeText={setEmail} style={estilo.caixaTexto}/>
                    <Text style={estilo.TextoInvalido}>E-mail parece ser inválido</Text>
                </View>

                <TouchableOpacity style={estilo.botaoRecuperar} onPress={goToLogin}> 
                    <Text style={estilo.textoNormal}>RECUPERAR</Text>
                </TouchableOpacity>

            </View>

        </View>


    )

}

const estilo = StyleSheet.create({

    Principal:{
        flex:1,
        backgroundColor: '#372775'
    },

    Header:{
        flex: 0.1,
        backgroundColor: '#2B1D62',
        alignItems: 'center',
        justifyContent: 'space-evelyn',
        flexDirection: 'row'
    },

    Main:{
        flex: 0.9,
        justifyContent: 'space-around',
        alignItems: 'center', 
    },

    caixaTexto:{
        backgroundColor: '#FFFFFF',
        fontFamily:'AveriaLibre-Regular',
        color: '#3F92C5',
        height: 60,
        fontSize: 20,
       
    },
    botaoRecuperar:{
        backgroundColor:'#37BD6D',
        alignItems: 'center',
        width: '80%',
        height: 60,
        justifyContent:'center'
    },

    email:{
        width: '80%'

    },
    TextoInvalido:{
        color: '#FD7979',
        ontFamily:'AveriaLibre-Regular',
    },
    textoNormal:{
        color: '#FFFFFF',
        fontFamily:'AveriaLibre-Regular',
        fontSize: 20

    },
    textoGrande:{
        color: '#FFFFFF',
        fontFamily:'AveriaLibre-Regular',
        fontSize: 30,
        left: 10
    }

})

export default RecuperacaoSenha