import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Dimensions } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window')

const NovaPesquisa = (props) => {

    const [txtNome, setNome] = useState('')
    const [txtData, setData] = useState('')
    const [imageUri, setImageUri] = useState(null)
    const [showDatePicker, setShowDatePicker] = useState(false)

    const selecionaImagem = () => {
        const options = {
        mediaType: 'photo',
        quality: 1,
        }

        launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker')
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
            setImageUri(response.assets[0].uri)
        }
        })
    }

    const formataData = (data) => {
        const textoLimpo = data.replace(/\D/g, '');

        let textoFormatado = textoLimpo;
        if (textoLimpo.length >= 3) {
            textoFormatado = `${textoLimpo.slice(0, 2)}/${textoLimpo.slice(2, 4)}`;
        }
        if (textoLimpo.length >= 5) {
            textoFormatado = `${textoLimpo.slice(0, 2)}/${textoLimpo.slice(2, 4)}/${textoLimpo.slice(4, 8)}`;
        }

        setData(textoFormatado);
    }

    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false)
        if (selectedDate) {
            const date = selectedDate.toLocaleDateString()
            setData(date)
        }
    }

    const cadastrar = () => {
        props.navigation.navigate('Modificar Pesquisa')
    }

    return (
        <View style={estilos.container}>

            <View style={estilos.componentes}>
                <Text style={estilos.texto}>Nome</Text>
                <TextInput style={estilos.textoInput} value={txtNome} onChangeText={setNome} />
                {!txtNome && (<Text style={estilos.textoWarning}>Preencha no nome da pesquisa</Text>)}
            </View>

            <View style={estilos.componentes}>
                <Text style={estilos.texto}>Data</Text>
                <View style={estilos.containerData}>
                    <TextInput style={estilos.dataInput} value={txtData} dataDetectorTypes={'calendarEvent'} keyboardType='numeric' onChangeText={formataData} />
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Icon name='event' size={40} color={'black'} style={{ opacity: 0.5 }}/>
                    </TouchableOpacity>
                </View>
                {!txtData && (<Text style={estilos.textoWarning}>Preencha a data</Text>)}
            </View>
            {showDatePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onDateChange}
                />
            )}

            <View style={estilos.componentes}>
                <Text style={estilos.texto}>Imagem</Text>
                <TouchableOpacity onPress={selecionaImagem}>
                <View style={estilos.img}>
                    {imageUri ?
                    (<Image source={{uri: imageUri}}/>)
                    :
                    (<Text style={estilos.textoImg}>Câmera/Galeria de imagens</Text>)
                    }
                </View>
                </TouchableOpacity>
                
            </View>

            <TouchableOpacity style={estilos.button} onPress={cadastrar}><Text style={estilos.texto}>CADASTRAR</Text></TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#372775',
        alignItems: 'center'
    },
    componentes :{
        marginTop: width * 0.05
    },
    textoInput: {
        width: width * 0.8,
        height: height * 0.07,
        backgroundColor:'#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        fontSize: 28,
        paddingLeft: width * 0.05
    },
    dataInput: {
        flex: 1,
        height: height * 0.07,
        backgroundColor:'#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        fontSize: 28,
        paddingLeft: width * 0.05
    },
    containerData: {
        width: width * 0.8,
        height: height * 0.07,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#FFFFFF',
        paddingRight: width * 0.025
    },
    button: {
        width: width * 0.8,
        height: height * 0.06,
        backgroundColor: '#37BD6D',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width * 0.12
    },
    texto: {
        fontSize: 28,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular'
    },
    textoWarning: {
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979'
    },
    textoImg: {
        fontSize: 20,
        color: '#939393',
        fontFamily: 'AveriaLibre-Regular'
    },
    img: {
        width: width * 0.8,
        height: height * 0.18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NovaPesquisa