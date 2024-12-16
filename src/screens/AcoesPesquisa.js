import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icones from "../components/Icones";
import { useSelector } from "react-redux";

const AcoesPesquisa = (props) => {

    const goToColeta = () => {
      props.navigation.navigate('Coleta')
    }
    const goToModificarPesquisa = () => {
      props.navigation.navigate('Modificar Pesquisa')
    }
    const goToRelatorio = () => {
      props.navigation.navigate('Relatório')
    }
    const nomePesq = useSelector((state) => state.pesquisa.nome) 
    props.navigation.setOptions({ title: nomePesq}) //Coloca o nome da página como o nome da pesquisa

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
