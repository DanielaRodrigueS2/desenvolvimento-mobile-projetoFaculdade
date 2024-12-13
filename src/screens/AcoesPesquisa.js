import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icones from "../components/Icones";
import { useSelector } from "react-redux";

//Library Add Check
//donut large

const AcoesPesquisa = (props) => {

    const goToColeta = () => {
      props.navigation.navigate('Coleta')
    }
    const goToModificarPesquisa = () => {
      props.navigation.navigate('Modificar Pesquisa')
    }
    const goToRelatorio = () => {
      props.navigation.navigate('Relatorio')
    }
    const nomePesq = useSelector((state) => state.pesquisa.nome)
    props.navigation.setOptions({ title: nomePesq})
    return(
      <View style={estilos.principal}>     
        <View style = {estilos.inferior}>
          <Icones texto = 'Modificar' icone = 'edit' cor = 'white' tela='AcoesPesquisa' funcao={goToModificarPesquisa}/>
          <Icones texto = 'Coletar dados' icone = 'library-add-check' cor = 'white' tela='AcoesPesquisa' funcao={goToColeta}/>
          <Icones texto = 'Relatório' icone = 'donut-large' cor = 'white' tela='AcoesPesquisa' funcao={goToRelatorio}/>
        </View>
      </View>
    )
}

const estilos = StyleSheet.create({
  principal:{
    flex: 1
  },
  header:{
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(43, 29, 98, 1)',
    flex: 0.2,
  },
  headerText: {
    color: 'white',
    fontSize: 40
  },
  inferior: {
    flex: 1,
    backgroundColor: 'rgba(55, 39, 117, 1)',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center'
  },
  textIcones:{
    color:'white',
    fontSize: 28
  }
})


export default AcoesPesquisa