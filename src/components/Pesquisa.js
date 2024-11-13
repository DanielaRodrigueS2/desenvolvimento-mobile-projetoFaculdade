import { TouchableOpacity, Text, Image, StyleSheet} from "react-native";

const Pesquisa = (props) =>{

    const img = props.img
    const nome_pesquisa = props.nome
    const data_pesquisa = props.data
    return(

        <TouchableOpacity style={estilo.pesquisa} onPress={props.onPress}>
            <Image source={{uri : img}}></Image>
            <Text style={estilo.textoNome}>{nome_pesquisa}</Text>
            <Text style={estilo.textoData}>{data_pesquisa}</Text>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    pesquisa:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'space-around',
        borderRadius: 5,
        width: 200,
        height: '50%',
        marginRight: 20
    },
    img:{
        
    },
    textoNome:{
        color: '#3F92C5',
        fontFamily:'AveriaLibre-Regular',
        fontSize: 20
    },
    textoData:{
        color: '#8B8B8B',
        fontFamily:'AveriaLibre-Regular',
        fontSize: 10
    }

})

export default Pesquisa