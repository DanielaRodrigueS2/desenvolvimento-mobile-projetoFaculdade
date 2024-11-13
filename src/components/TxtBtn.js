import { Text, StyleSheet, TouchableOpacity, Button } from 'react-native'

const TxtBtn = (props) => {

    const {texto, background, height} = props


    return(

        <TouchableOpacity style = {[estilo.btn,{backgroundColor: background, height: height}]} onPress={props.onPress}>
            <Text style = {estilo.txtBtn}>{texto}</Text>
        </TouchableOpacity>

    )

}

const estilo = StyleSheet.create({

    txtBtn: {
        fontSize:20,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
    },
    btn: {
        justifyContent: 'center',
        borderRadius: 5,
        alignItems: 'center',
        width: 400,
    },

    }
)

export default TxtBtn