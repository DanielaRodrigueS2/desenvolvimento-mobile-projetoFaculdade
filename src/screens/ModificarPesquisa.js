import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react'
import { Dimensions } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker'
import ImageResizer from 'react-native-image-resizer'
import { initializeFirestore, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import app from '../firebase'
import { useSelector } from 'react-redux'

const { width, height } = Dimensions.get('window')

const ModificarPesquisa = (props) => {
    const userId = useSelector((state) => state.login.userId)
    const pesquisaId = useSelector((state) => state.pesquisa.pesquisaId)
    const nome = useSelector((state) => state.pesquisa.nome)
    const data = useSelector((state) => state.pesquisa.data)
    const imagem = useSelector((state) => state.pesquisa.imagem)

    const db = initializeFirestore(app, { experimentalForceLongPolling: true })

    const [txtNome, setNome] = useState(nome)
    const [txtData, setData] = useState(data)
    const [imageUri, setImageUri] = useState(imagem)
    const [showPopup, setShowPopup] = useState(false)
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
        const textoLimpo = data.replace(/\D/g, '')
        let textoFormatado = textoLimpo

        if (textoLimpo.length >= 3) {
            textoFormatado = `${textoLimpo.slice(0, 2)}/${textoLimpo.slice(2, 4)}`
        }
        if (textoLimpo.length >= 5) {
            textoFormatado = `${textoLimpo.slice(0, 2)}/${textoLimpo.slice(2, 4)}/${textoLimpo.slice(4, 8)}`
        }

        setData(textoFormatado)
    }

    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false)

        if (selectedDate) {
            const dia = selectedDate.getDate().toString().padStart(2, '0')
            const mes = (selectedDate.getMonth() + 1).toString().padStart(2, '0')
            const ano = selectedDate.getFullYear()
            const dataFormatada = `${dia}/${mes}/${ano}`
            setData(dataFormatada)
        }
    }

    const salvar = () => {
        if (txtNome == '' || txtData == '') {
            alert('Por favor, preencha todos os campos.')
            return
        }

        const pesquisaRef = doc(db, 'pesquisasUsers', userId, 'pesquisas', pesquisaId)

        updateDoc(pesquisaRef, {
            nome: txtNome,
            data: txtData,
            imagem: imageUri
        })
            .then(() => {
                props.navigation.pop(2)
            })
            .catch((error) => {
                console.log('Erro ao modificar pesquisa:', error);
                alert('Erro ao modificar pesquisa');
            })
    }

    const apagar = () => {
        setShowPopup(true)
    }

    const confirmaApagar = () => {
        const pesquisaRef = doc(db, 'pesquisasUsers', userId, 'pesquisas', pesquisaId)

        deleteDoc(pesquisaRef)
            .then(() => {
                props.navigation.pop(2)
            })
            .catch((error) => {
                console.log('Erro ao deletar pesquisa:', error)
                alert('Erro ao deletar pesquisa')
            })
    }

    const cancelar = () => {
        setShowPopup(false)
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

                <View style={estilos.saveDelete}>
                    <TouchableOpacity style={estilos.button} onPress={salvar}><Text style={estilos.texto}>SALVAR</Text></TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoApagar} onPress={apagar}>
                        <Icon name='delete' size={50} color={'#FFFFFF'} />
                        <Text style={estilos.textoApagar}>Apagar</Text>
                    </TouchableOpacity>
                </View>

                {showPopup && (
                    <View style={estilos.bloqClick}>
                        <View style={estilos.popup}>
                            <Text style={estilos.textoPopup}>Tem certeza de apagar essa pesquisa?</Text>
                            <View style={estilos.popupBotoes} >
                                <TouchableOpacity style={estilos.opSim} onPress={confirmaApagar}><Text style={estilos.texto}>SIM</Text></TouchableOpacity>
                                <TouchableOpacity style={estilos.opCanc} onPress={cancelar}><Text style={estilos.texto}>CANCELAR</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
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
        width: width * 0.5,
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
    textoPopup: {
        fontSize: 28,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        marginTop: '5%'
    },
    img: {
        width: width * 0.8,
        height: height * 0.2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveDelete: {
        width: width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    botaoApagar: {
        flexDirection: 'colum',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    textoApagar: {
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF'
    },
    bloqClick: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    popup: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372775',
        flexDirection: 'column',
        width: width * 0.9,
        height: height * 0.26,
        opacity: 1
    },
    opSim: {
        width: '45%',
        height: '70%',
        backgroundColor: '#FF8383',
        justifyContent: 'center',
        alignItems: 'center'
    },
    opCanc: {
        width: '45%',
        height: '70%',
        backgroundColor: '#3F92C5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popupBotoes: {
        flexDirection: 'row',
        width: '98%',
        justifyContent: 'space-around',
        marginTop: '10%'
    }
})

export default ModificarPesquisa
