import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = props => {
  return (
    <View style={estilos.headerContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="arrow-back" size={36} color="#573FBA" />
      </TouchableOpacity>
      <Text style={estilos.texto}>{props.texto}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#2B1D62',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 20,
  },

  texto: {
    fontFamily: 'AveriaLibre-Bold',
    color: '#fff',
    fontSize: 28,
  },
});

export default Header;
