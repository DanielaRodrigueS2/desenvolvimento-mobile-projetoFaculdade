import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { DrawerContentScrollView} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialIcons'


const CustomDrawer = (props) =>{
    return(
        <DrawerContentScrollView {...props}>
            <View style={estilo.principal}>
                <View style={estilo.top}> 
                    <Text style={estilo.textoEmail}>email@gmail.com</Text>
                    <View style={estilo.linha}>
                        <Text>a</Text>
                    </View>

                    <TouchableOpacity style={estilo.botoes} onPress={() => props.navigation.navigate('Home')}>
                        <Icon name='description' size={40} color='white'/>
                        <Text style={estilo.textoNormal}>Pesquisas</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={estilo.botoes} onPress={() => props.navigation.navigate('Login')}>
                    <Icon name='logout' size={40} color='white'/>
                    <Text style={estilo.textoNormal}>Sair</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>

    )
}

const estilo = StyleSheet.create({

    principal:{
        flex: 1,
        justifyContent: 'space-between',
        
        paddingTop: 20
        
    },
    linha:{
        backgroundColor: 'white',
        width: '80%',
        height: 2,
        alignSelf: 'center',
        top: 10
    },
    top:{
        paddingBottom: 600
    },
    botoes:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        left: 30,
        top: 40
    },
    textoEmail:{
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 30,
        alignSelf: 'center'
    },
    textoNormal:{
        color: '#FFFFFF',
        fontFamily:'AveriaLibre-Regular',
        fontSize: 30,
        left: 10
    },
    sair:{
        alignSelf: 'flex-end'
    }
    

})

export default CustomDrawer