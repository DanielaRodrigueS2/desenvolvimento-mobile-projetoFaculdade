import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/redux/store'

import Login from './src/screens/Login'
import RecuperacaoSenha from './src/screens/RecuperacaoSenha'
import Register from './src/screens/Register'
import AcoesPesquisa from './src/screens/AcoesPesquisa'
import Coleta from './src/screens/Coleta'
import Drawer from './src/screens/Drawer'
import Home from './src/screens/Home'
import NovaPesquisa from './src/screens/NovaPesquisa'
import ModificarPesquisa from './src/screens/ModificarPesquisa'
import Agradecimento from './src/screens/Agradecimento'
import Relatorio from './src/screens/Relatorio'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTintColor: '#573FBA', headerStyle: { backgroundColor: '#2B1D62' }, headerTitleStyle: { fontFamily: 'AveriaLibre-Regular', fontSize: 30, color: '#FFFFFF' } }}>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Recuperação de Senha' component={RecuperacaoSenha} options={{headerShown: false}}/>
          <Stack.Screen name='Nova Conta' component={Register} />
          <Stack.Screen name='AcoesPesquisa' component={AcoesPesquisa} />
          <Stack.Screen name='Coleta' component={Coleta} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Drawer' component={Drawer} options={{ headerShown: false }} />
          <Stack.Screen name='Nova Pesquisa' component={NovaPesquisa} />
          <Stack.Screen name='Modificar Pesquisa' component={ModificarPesquisa} />
          <Stack.Screen name='Agradecimento' component={Agradecimento} options={{ headerShown: false }} />
          <Stack.Screen name='Relatório' component={Relatorio} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App