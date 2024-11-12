import { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const TelaLogin = () => {
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const fazerLogin = () => {
        //Ainda ira ser implementada
    }

    const criarConta = () =>{

    }
    
    return(
        <View id="View Principal" style={estilo.Principal}>

            <View id="Satisfyng.you" style={estilo.Satisfyng}>
                <Text style={estilo.TextoSatis}>Satisfyng.you</Text>
                <Icon name='sentiment-satisfied-alt' size = {50} color="white"/>

            </View>

            <View id="Main" style={estilo.Main}>

                <View id="Login" style={estilo.Login}>
                    <View id="Email">
                        <Text style={estilo.textoNormal}>E-mail</Text>
                        <TextInput value={email} onChangeText={setEmail} style={estilo.caixaTexto}/>
                    </View>

                    <View id="Senha">
                        <Text style={estilo.textoNormal}>Senha</Text>
                        <TextInput value={senha} onChangeText={setSenha} style={estilo.caixaTexto}/>
                        <Text style={estilo.TextoInvalido}>E-mail e/ou senha inválidos.</Text>
                    </View>

                    <View id="Entrar">
                        <TouchableOpacity onPress={fazerLogin} style={estilo.botaoEntrar}>
                            <Text style={estilo.textoNormal}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View id="Botoes Extras" style={estilo.Botoes}>
                    <TouchableOpacity onPress={criarConta} style={estilo.botaoCriar}>
                        <Text style={estilo.textoNormal}>Criar minha conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.botaoEsqueci}>
                        <Text style={estilo.textoNormal}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    Principal:{
        backgroundColor: '#372775',
        flex: 1,
    },

    Satisfyng:{
        alignItems: 'center',
        flex: 0.15,
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    Main:{
        flex: 0.85,
        justifyContent: 'space-between',
        alignItems: 'center', 
    },

    Login:{
        flex: 0.6,
    
        justifyContent: 'space-evenly',
        width:'80%'
    },

    Botoes:{
        flex: 0.2,
        width:'80%',
        height: 40,
    },

    textoNormal:{
        color: '#FFFFFF',
        fontFamily:'AveriaLibre-Regular',
        fontSize: 20

    },

    TextoSatis:{
        fontSize: 32,
        fontFamily:'AveriaLibre-Regular',
        color: '#FFFFFF',
        marginRight: 20

    },

    TextoInvalido:{
        color: '#FD7979',
        ontFamily:'AveriaLibre-Regular',
    },

    caixaTexto:{
        backgroundColor: '#FFFFFF',
        fontFamily:'AveriaLibre-Regular',
        color: '#3F92C5',
        height: 60,
        fontSize: 20
    },

    botaoEntrar:{
        backgroundColor:'#37BD6D',
        alignItems: 'center',
        width: '100%',
        height: 60,
        justifyContent:'center'
    },

    botaoCriar:{
        backgroundColor:'#419ED7',
        alignItems: 'center',
        marginVertical: 5,
        height: 40,
        justifyContent:'center'
    },

    botaoEsqueci:{
        backgroundColor:'#B0CCDE',
        alignItems: 'center',
        height: 40,
        justifyContent:'center'
    }

})

export default TelaLogin