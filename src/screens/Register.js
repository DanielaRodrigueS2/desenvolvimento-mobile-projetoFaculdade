import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth_mod } from "../firebase/firebase";

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!text.includes('@') || !text.includes('.com')) {
      setErroEmail('Por favor, insira um e-mail válido.');
    } else {
      setErroEmail('');
    }
  };

  const handleCadastro = () => {
    if (senha !== confirmSenha) {
      setErroSenha('As senhas não coincidem.');
    } else {
      setErroSenha('');
      cadastrarUsuário();
    }
  };

  const cadastrarUsuário = () => {
    createUserWithEmailAndPassword(auth_mod, email, senha)
      .then((userCredential) => {
        console.log('Usuário criado com sucesso:', userCredential);
        props.navigation.navigate('Login'); 
      })
      .catch((error) => {
        console.log('Erro ao criar usuário:', error.message);
        setErroSenha('Erro ao criar usuário. Tente novamente.');
      });
  };

  return (
    <View style={estilos.view}>
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
        secureTextEntry
        autoCapitalize="none"
      />

      <TextInput
        style={estilos.txtInput}
        value={confirmSenha}
        onChangeText={setConfirmSenha}
        placeholder="Repita sua senha"
        secureTextEntry
        autoCapitalize="none"
      />
      {erroSenha ? <Text style={estilos.erro}>{erroSenha}</Text> : null}

      <TouchableOpacity onPress={handleCadastro} style={estilos.Btn}>
        <Text style={estilos.TxtBtn}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#372775',
    fontFamily: 'AveriaLibre-Regular',
    justifyContent: 'space-between',
    padding: '4%',
  },
  txtInput: {
    backgroundColor: 'white',
    width: '60%',
    height: 30,
    borderRadius: 5,
    fontFamily: 'AveriaLibre-Regular',
    marginTop: '4%',
  },
  Btn: {
    marginTop: '5%',
    backgroundColor: '#37BD6D',
    height: '12%',
    width: '60%',
    borderRadius: 5,
  },
  TxtBtn: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'AveriaLibre-Regular',
  },
  erro: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '21%',
    marginTop: '-2%',
  },
});

export default Register;