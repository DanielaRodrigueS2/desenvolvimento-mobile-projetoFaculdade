import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth_mod } from './firebase'; 


const RecuperacaoSenha = (props) => {

    const [email, setEmail] = useState('');

    const goToLogin = () => {
        props.navigation.navigate('Login');
    };

    const recoverPassword = () => {
        sendPasswordResetEmail(auth_mod,email)
            .then (() => {
                console.log("Email de redefinicao enviado com sucesso")
            }) 
            .catch ((error) => {
                console.log("Falha ao tentar redefinir" + JSON.stringify )
            })

    }


    return (
        <View id="Principal" style={estilo.Principal}>

            <View id="header" style={estilo.Header}>
                <TouchableOpacity onPress={goToLogin}>
                    <Icon style={estilo.menu} name="arrow-back" size={40} color="#573FBA" />
                </TouchableOpacity>
                <Text style={estilo.textoGrande}>Recuperação de senha</Text>
            </View>

            <View id="main" style={estilo.Main}>
                <View id="email" style={estilo.email}>
                    <Text style={estilo.textoNormal}>E-mail</Text>
                    <TextInput
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                        }}
                        style={estilo.caixaTexto}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    
                </View>

                <TouchableOpacity style={estilo.botaoRecuperar} onPress={recoverPassword}>
                    <Text style={estilo.textoNormal}>RECUPERAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const estilo = StyleSheet.create({
    Principal: {
        flex: 1,
        backgroundColor: '#372775'
    },
    Header: {
        flex: 0.1,
        backgroundColor: '#2B1D62',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    Main: {
        flex: 0.9,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    caixaTexto: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        height: 60,
        fontSize: 20,
    },
    botaoRecuperar: {
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        width: '80%',
        height: 60,
        justifyContent: 'center'
    },
    email: {
        width: '80%'
    },
    TextoInvalido: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    },
    textoNormal: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20
    },
    textoGrande: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 30,
        left: 10
    }
});

export default RecuperacaoSenha;
