import { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet} from "react-native";

const App = () => {
    
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

            </View>

            <View id="Main" style={estilo.Main}>

                <View id="Login">
                    <View id="Email">
                        <Text>E-mail</Text>
                        <TextInput value={email} onChangeText={setEmail} style={estilo.caixaTexto}/>
                    </View>

                    <View id="Senha">
                        <Text>Senha</Text>
                        <TextInput value={senha} onChangeText={setSenha} style={estilo.caixaTexto}/>
                        <Text>E-mail e/ou senha inválidos.</Text>
                    </View>

                    <View id="Entrar">
                        <TouchableOpacity onPress={fazerLogin} style={estilo.botaoEntrar}>
                            <Text>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View id="Botoes Extras" style={estilo.Botoes}>
                    <TouchableOpacity onPress={criarConta} style={estilo.botaoCriar}>
                        <Text>Criar minha conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.botaoEsqueci}>
                        <Text>Esqueci minha senha</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    Principal:{
        backgroundColor: '#372775',
        flex: 1
    },

    Satisfyng:{
        alignItems: 'center',
        flex: 0.25,
        marginTop: 40
    },

    Main:{
        flex: 0.5
    },

    Botoes:{
        flex: 0.25
    },

    textoNormal:{
        color: '#FFFFFF'

    },

    TextoSatis:{
        fontSize: 32
    },

    caixaTexto:{
        backgroundColor: '#FFFFFF'
    },

    botaoEntrar:{
        backgroundColor:'#37BD6D',
        alignItems: 'center'
    },

    botaoCriar:{
        backgroundColor:'#419ED7',
        alignItems: 'center',
        marginVertical: 5
    },

    botaoEsqueci:{
        backgroundColor:'#B0CCDE',
        alignItems: 'center'
    }

})

export default App