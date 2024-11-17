import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icones from "../components/Icones";

const Coleta = (props) => {

    const goToAcoesPesquisa = () => {
        props.navigation.navigate('Carnaval')
    }
    const goToAgradecimento = () => {
        props.navigation.navigate('AgradecimentoParticipacao')
    }
    return (
        <View style = {estilos.principal}>
            <Text style = {estilos.textoPrincipal}>
                O que você achou do Carnaval 2024?
            </Text>
            <View style = {estilos.opcoes}>
                <Icones texto = 'Péssimo' icone = 'sentiment-sad' cor = '#D71616' tela='Coleta' funcao = {goToAcoesPesquisa}/>
                <Icones texto = 'Ruim' icone = 'emoticon-sad-outline' cor = '#FF360A' tela='Coleta' funcao = {goToAcoesPesquisa}/>
                <Icones texto = 'Neutro' icone = 'emoticon-neutral-outline' cor = '#FFC632' tela='Coleta' funcao = {goToAcoesPesquisa}/>
                <Icones texto = 'Bom' icone = 'emoticon-happy-outline' cor = '#37BD6D' tela='Coleta' funcao = {goToAcoesPesquisa}/>
                <Icones texto = 'Excelente' icone = 'emoticon-cool-outline' cor = '#25BC22' tela='Coleta' funcao = {goToAcoesPesquisa}/>
            </View>
            
        </View>
    )

}

const estilos = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: 'rgba(55, 39, 117, 1)',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    textoPrincipal: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'AveriaLibre-Regular'
    },
    opcoes: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textoIcones: {
        color: 'white',
        fontSize: 26
    }
})

export default Coleta
