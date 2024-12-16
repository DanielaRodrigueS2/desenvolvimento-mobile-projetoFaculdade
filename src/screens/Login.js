import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TxtBtn from '../components/TxtBtn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth_mod } from '../firebase';
import { reducerSetLogin } from '../redux/loginSlice';
import { useDispatch } from 'react-redux';

const Login = (props) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!text.includes('@') || !text.includes('.com')) {
      setErroEmail('Por favor, insira um e-mail válido.');
    } else {
      setErroEmail('');
    }
  };

  const goToRegister = () => {
    props.navigation.navigate('Nova Conta');
  };

  const goToHome = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      dispatch(reducerSetLogin({ userId: user.uid, email: email }));

      
      props.navigation.navigate('Drawer');
    }
  };

  const goToRecSenha = () => {
    props.navigation.navigate('Recuperação de Senha');
  };

  const autenticarUsuario = () => {
    signInWithEmailAndPassword(auth_mod, email, senha)
      .then((userLogged) => {
        console.log('Usuario logado com sucesso' + JSON.stringify(userLogged))
        goToHome()
      })
      .catch((erro) => {
        console.log('erro ao autenticar' + JSON.stringify(erro))
      })
  }

  return (

    <View style={estilos.view}>
      <Text style={estilos.title}>
        Satisfying.you <Icon name="mood" size={30} color={'#ffffff'} />
      </Text>


      <TextInput
        style={estilos.txtInput}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Digite seu e-mail"
        autoCapitalize="none"

      />

      {erroEmail ? <Text style={estilos.erro}>{erroEmail}</Text> : null}

      <TextInput
        style={estilos.txtInput}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <TxtBtn texto="Entrar" background="#37BD6D" height={40} onPress={autenticarUsuario} />

      <TxtBtn texto="Criar conta" background="#419ED7" height={30} onPress={goToRegister} />

      <TxtBtn texto="Esqueci minha senha" background="#B5C7D1" height={30} onPress={goToRecSenha} />

    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#372775',
    padding: '5%',
    fontFamily: 'AveriaLibre-Regular',
  },

  title: {
    alignItems: 'center',
    fontSize: 30,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },

  txtInput: {
    backgroundColor: 'white',
    width: '67%',
    height: '10%',
    borderRadius: 5,
    fontFamily: 'AveriaLibre-Regular',
    paddingHorizontal: 10,
  },

  erro: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '17%',
    marginTop: '-2%',
  },
});

export default Login;
