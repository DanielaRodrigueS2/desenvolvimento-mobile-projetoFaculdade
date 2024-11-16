import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import RecuperacaoSenha from "./src/screens/RecuperacaoSenha";
import Register from "./src/screens/Register";
import Drawer from "./src/screens/Drawer";
import NovaPesquisa from "./src/screens/NovaPesquisa";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import Coleta from "./src/screens/Coleta";

const Stack = createStackNavigator()

const App = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='RecuperacaoSenha' component={RecuperacaoSenha} options={{headerShown: false}} />
                <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
                <Stack.Screen name='Drawer' component={Drawer} options={{headerShown: false}}/>
                <Stack.Screen name='NovaPesquisa' component={NovaPesquisa} options={{headerShown: true}}/>
                <Stack.Screen name='ModificarPesquisa' component={ModificarPesquisa} options={{headerShown: true}}/>
                <Stack.Screen name='AcoesPesquisa' component = {AcoesPesquisa} options={{headerStyle:{backgroundColor: '#2B1D62'},headerTintColor:'#573FBA',headerTitleStyle:{color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular'}}}/>
                <Stack.Screen name='Coleta' component = {Coleta} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App