import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const Agradecimento  = (props) => {

    useEffect(() => {
        const goBack = setTimeout(() => {
            props.navigation.goBack();
        }, 3000); 
    
        return () => clearTimeout(goBack);
    },);
    

    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}> Obrigado por participar da pesquisa! </Text>
            <Text style={estilos.texto}> Aguardamos você no próximo ano! </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'      
    },
  
    texto: {
        fontSize: 30,
        fontFamily: 'AveriaLibre-Regular',
        color: '#fff',
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 60,
    }
});
  
export default Agradecimento;