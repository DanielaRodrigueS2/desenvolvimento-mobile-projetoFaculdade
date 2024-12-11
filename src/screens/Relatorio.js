import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {useSelector} from 'react-redux';
import Header from '../components/Header';

const Relatorio = props => {
  // Obter valores da coleta do Redux
  const coleta = useSelector(state => state.pesquisa.coleta);

  // Definir os dados do gráfico
  const data = [
    {key: 'Excelente', value: coleta.excelente, color: '#F1CE7E'},
    {key: 'Bom', value: coleta.bom, color: '#6994FE'},
    {key: 'Neutro', value: coleta.neutro, color: '#5FCDA4'},
    {key: 'Ruim', value: coleta.ruim, color: '#EA7288'},
    {key: 'Péssimo', value: coleta.pessimo, color: '#53D8D8'},
  ];

  // Extrair os valores e cores para o gráfico
  const chartValues = data.map(item => item.value);
  const chartColors = data.map(item => item.color);

  return (
    <View style={estilos.container}>
      <Header texto="Relatório" onPress={() => props.navigation.goBack()} />
      <View style={estilos.relatorioContainer}>
        {/* Gráfico de Pizza */}
        <PieChart
          widthAndHeight={250} // Dimensão do gráfico
          series={chartValues} // Valores
          sliceColor={chartColors} // Cores
          doughnut={true} // Habilitar gráfico de anel
          coverRadius={0.5} // Tamanho do círculo central (se doughnut for true)
          coverFill="#372775" // Cor do centro do gráfico
        />

        {/* Legenda */}
        <View style={estilos.legendaContainer}>
          {data.map((item, index) => (
            <View key={index} style={estilos.legendaItem}>
              <View
                style={[estilos.legendaCor, {backgroundColor: item.color}]}
              />
              <Text style={estilos.legendaTexto}>{item.key}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
  },

  relatorioContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 34,
  },

  legendaContainer: {
    marginLeft: 20,
  },

  legendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  legendaCor: {
    width: 30,
    height: 30,
    marginRight: 5,
  },

  legendaTexto: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
});

export default Relatorio;
