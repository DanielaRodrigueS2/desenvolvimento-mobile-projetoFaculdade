//importação
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

//definição
const Icones = (props) => {

    const texto = props.texto
    const icone = props.icone
    const cor = props.cor
    const tela = props.tela
    if(tela=='AcoesPesquisa'){
        return(
            <TouchableOpacity style = {estilos.AcoesPesquisa} onPress={props.funcao}>
                <Icon name = {icone} size = {90} color = {cor}/>
                <Text style = {{color: 'white', fontSize: 28, fontFamily: 'AveriaLibre-Regular'}}>{texto}</Text>
            </TouchableOpacity>
        )
    }
    else if(tela == 'Coleta'){
        return(
            <TouchableOpacity style = {estilos.Coleta} onPress={props.funcao}>
                <Icon2 name = {icone} size = {90} color = {cor}/>
                <Text style = {{color: 'white', fontSize: 28, fontFamily: 'AveriaLibre-Regular'}}>{texto}</Text>
            </TouchableOpacity>
        )
    }
    
}

const estilos = StyleSheet.create({
    AcoesPesquisa: {
        height: '60%',
        width: '25%',
        backgroundColor: 'rgba(49, 36, 100, 1)',
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Coleta: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Icones