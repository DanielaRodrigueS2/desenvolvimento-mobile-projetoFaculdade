import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react'
import { Dimensions } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ImageResizer from 'react-native-image-resizer'
import { initializeFirestore, collection, addDoc, doc } from 'firebase/firestore'
import app from '../firebase/firebase'
import { useSelector } from 'react-redux'

const { width, height } = Dimensions.get('window')

const NovaPesquisa = (props) => {

    const db = initializeFirestore(app, { experimentalForceLongPolling: true })
    const pesquisaCollection = collection(db, 'pesquisasUsers')
    const userRef = doc(pesquisaCollection, 'caio')
    const pesquisaRef = collection(userRef, 'pesquisas')

    const [txtNome, setNome] = useState('')
    const [txtData, setData] = useState('')
    const [imageUri, setImageUri] = useState(null)
    const [showDatePicker, setShowDatePicker] = useState(false)

    const convertUriToBase64 = async (uri) => {
        const resizedImage = await ImageResizer.createResizedImage(
            uri,
            400,
            400,
            'JPEG',
            100
        )

        const imageUri = await fetch(resizedImage.uri)
        const imagemBlob = await imageUri.blob()
        const reader = new FileReader()

        reader.onloadend = () => {
            setImageUri(reader.result)
        }
        reader.readAsDataURL(imagemBlob)
    }

    const selecionaImagem = () => {
        launchImageLibrary({ mediaType: 'photo' }, (result) => {
            if (result.didCancel) {
                return
            }
            else {
                convertUriToBase64(result.assets[0].uri)
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
        if (txtNome == '' || txtData == '') {
            return
        }

        const docPesquisa = {
            nome: txtNome,
            data: txtData,
            imagem: imageUri,
            coleta: {
                pessimo: 0,
                ruim: 0,
                neutro: 0,
                bom: 0,
                excelente: 0
            }
        }

        addDoc(pesquisaRef, docPesquisa)
            .then(() => {
                props.navigation.goBack()
            })
            .catch((error) => {
                console.log('Erro ao cadastrar pesquisa:', error)
                alert('Erro ao cadastrar pesquisa')
            })
    }

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={estilos.backgroundScroll}>
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
                            <Icon name='event' size={40} color={'black'} style={{ opacity: 0.5 }} />
                        </TouchableOpacity>
                    </View>
                    {!txtData && (<Text style={estilos.textoWarning}>Preencha a data</Text>)}
                </View>
                {showDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onDateChange} />
                )}

                <View style={estilos.componentes}>
                    <Text style={estilos.texto}>Imagem</Text>
                    <TouchableOpacity onPress={selecionaImagem}>
                        <View style={estilos.img}>
                            {imageUri ?
                                (<Image source={{ uri: imageUri }} style={estilos.img} />)
                                :
                                (<Text style={estilos.textoImg}>Câmera/Galeria de imagens</Text>)
                            }
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={estilos.button} onPress={cadastrar}><Text style={estilos.texto}>CADASTRAR</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    backgroundScroll: {
        flexGrow: 1,
        backgroundColor: '#372775'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    componentes: {
        marginTop: width * 0.05
    },
    textoInput: {
        width: width * 0.8,
        height: height * 0.07,
        backgroundColor: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        fontSize: 28,
        paddingLeft: width * 0.05
    },
    dataInput: {
        flex: 1,
        height: height * 0.07,
        backgroundColor: '#FFFFFF',
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
        backgroundColor: '#FFFFFF',
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
        height: height * 0.2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NovaPesquisa