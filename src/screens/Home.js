import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Pesquisa from "../components/Pesquisa";
import { initializeFirestore, collection, onSnapshot, doc } from 'firebase/firestore'
import app from '../firebase'
import { useSelector , useDispatch} from "react-redux";
import { reducerSetPesquisa } from "../redux/pesquisaSlice";


const Home = (props) => {

    const userId = useSelector((state) => state.login.userId)
    const db = initializeFirestore(app, { experimentalForceLongPolling: true })
    const PesquisasUsers = collection(doc(db, 'pesquisasUsers', userId), 'pesquisas');
    const [ListaPesquisas, setListaPesquisas] = useState([])
    
    const dispatch = useDispatch()

    const [busca, setBusca] = useState('Insira o termo de busca...')

    const goToNovaPesquisa = () => {
        props.navigation.navigate('Nova Pesquisa')
    }

    const goToAcoesPesquisa = (pesquisaId, nome, data, img, coleta) => {
        const pesquisa = { pesquisaId, nome, data, imagem: img, coleta: coleta };
        console.log("Dados sendo enviados ao Redux:", pesquisa); // Teste
        dispatch(reducerSetPesquisa(pesquisa));
        props.navigation.navigate('AcoesPesquisa');
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(PesquisasUsers, (snapshot) => {
            const pesq = []
            snapshot.forEach((doc) => {
                pesq.push({
                    pesquisaId: doc.id,
                    ...doc.data()
                })
            })
            setListaPesquisas(pesq)
        })
    }, [])

    const itemPesquisa = ({ item }) => {
        return (
            <Pesquisa nome={item.nome} data={item.data} img={item.img} 
            onPress={()=>goToAcoesPesquisa(item.pesquisaId, item.nome, item.data, item.img, item.coleta)}></Pesquisa>
        )
    }


    return (

        <View id="Tela" style={estilo.Principal}>

            <View id="Main" style={estilo.Main}>

                <View id="BarraPesquisa" style={estilo.BarraPesquisa}>

                    <TextInput style={estilo.InputBarraPesquisa} value={busca} onChangeText={setBusca} ></TextInput>
                    <Icon style={estilo.icon} name="search" size={20} color="#8B8B8B" />
                </View>

                <FlatList data={ListaPesquisas} renderItem={itemPesquisa}
                    keyExtractor={(item) => item.pesquisaId}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} 
                    style={estilo.Pesquisas} horizontal={true} />

                <View id="NovaPesquisa" style={estilo.NovaPesquisa}>
                    <TouchableOpacity style={estilo.BotaoPesquisa} onPress={goToNovaPesquisa}>
                        <Text style={estilo.textoNormal}>Nova Pesquisa</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )

}

const estilo = StyleSheet.create({

    Principal: {
        flex: 1,
        backgroundColor: '#372775'
    },

    Header: {
        flex: 0.1,
        backgroundColor: '#2B1D62',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    Main: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    BarraPesquisa: {
        flex: 0.2,
        justifyContent: 'center',
        width: '80%'

    },

    Pesquisas: {
        flex: 0.6,
        width: '80%',
        height: '100%',
        horizontal : 'true',
        paddingTop: 30
    },

    NovaPesquisa: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'

    },

    BotaoPesquisa: {
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        width: '100%',
        height: 60,
        justifyContent: 'center'
    },

    InputBarraPesquisa: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        color: '#8B8B8B',
        width: '100%',
        paddingLeft: 30,

    },

    icon: {
        position: 'absolute',
        left: 5,

    },

    textoNormal: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20

    },

    menu: {
        left: 10
    },

    scrollContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

})

export default Home
