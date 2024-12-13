import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icones from '../components/Icones';
import {useDispatch} from 'react-redux';
import {incrementarColeta} from '../redux/pesquisaSlice';
import { useSelector } from 'react-redux';

const Coleta = props => {
  const dispatch = useDispatch();
  const goToAcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa');
  };
  const goToAgradecimento = categoria => {
    // Dispara a ação para atualizar o Redux
    dispatch(incrementarColeta(categoria));
    // Navega para a tela de agradecimento
    props.navigation.navigate('Agradecimento');
  };
  const nomePesq = useSelector((state) => state.pesquisa.nome)
  return (
        <View style={estilos.principal}>
            <View style = {estilos.header}>
                <Pressable onPress={goToAcoesPesquisa} style = {estilos.botaoVoltar}>
                </Pressable>
            </View>
            <Text style={estilos.textoPrincipal}>
                O que você achou de {nomePesq}?
            </Text>
            <View style={estilos.opcoes}>
                <Icones
                    texto="Péssimo"
                    icone="emoticon-angry-outline"
                    cor="#D71616"
                    tela="Coleta"
                    funcao={() => goToAgradecimento('pessimo')}
                />
                <Icones
                    texto="Ruim"
                    icone="emoticon-sad-outline"
                    cor="#FF360A"
                    tela="Coleta"
                    funcao={() => goToAgradecimento('ruim')}
                />
                <Icones
                    texto="Neutro"
                    icone="emoticon-neutral-outline"
                    cor="#FFC632"
                    tela="Coleta"
                    funcao={() => goToAgradecimento('neutro')}
                />
                <Icones
                    texto="Bom"
                    icone="emoticon-happy-outline"
                    cor="#37BD6D"
                    tela="Coleta"
                    funcao={() => goToAgradecimento('bom')}
                />
                <Icones
                    texto="Excelente"
                    icone="emoticon-cool-outline"
                    cor="#25BC22"
                    tela="Coleta"
                    funcao={() => goToAgradecimento('excelente')}
                />
            </View>
            <View style = {estilos.header}>

            </View>
        </View>
  );
};

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'rgba(55, 39, 117, 1)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header:{
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  botaoVoltar:{
    height:'100%',
    width: '10%',
  },
  textoPrincipal: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'AveriaLibre-Regular',
  },
  opcoes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textoIcones: {
    color: 'white',
    fontSize: 26,
  },
});

export default Coleta;