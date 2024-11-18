import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

import Header from '../components/Header';

const Relatorio = (props) => {
  const data = [
    {
      key: 'Excelente',
      value: 10,
      svg: {fill: '#F1CE7E'},
      arc: {outerRadius: '120%', cornerRadius: 0, padAngle: 0.2},
    },
    {
      key: 'Bom',
      value: 20,
      svg: {fill: '#6994FE'},
    },
    {
      key: 'Neutro',
      value: 15,
      svg: {fill: '#5FCDA4'},
    },
    {
      key: 'Ruim',
      value: 5,
      svg: {fill: '#EA7288'},
    },
    {
      key: 'Péssimo',
      value: 3,
      svg: {fill: '#53D8D8'},
    },
  ];

  return (
    <View style={estilos.container}>
      <Header texto="Relatório" onPress={() => props.navigation.goBack()} />
      <View style={estilos.relatorioContainer}>
        <PieChart
          style={estilos.pieChart}
          outerRadius={'83%'}
          innerRadius={'10%'}
          data={data}
          padAngle={0}
        />

        <View style={estilos.legendaContainer}>
          {data.map((item, index) => (
            <View key={index} style={estilos.legendaItem}>
              <View
                style={[estilos.legendaCor, {backgroundColor: item.svg.fill}]}
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

  pieChart: {
    height: 300,
    width: 250,
    display: 'flex',
    marginLeft: '-10%',
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
