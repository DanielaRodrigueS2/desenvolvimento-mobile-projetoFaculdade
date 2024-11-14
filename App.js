import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import RecuperacaoSenha from "./src/screens/RecuperacaoSenha";
import Register from "./src/screens/Register";
import Drawer from "./src/screens/Drawer";

const Stack = createStackNavigator()

const App = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='RecuperacaoSenha' component={RecuperacaoSenha} options={{headerShown: false}} />
                <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
                <Stack.Screen name='Drawer' component={Drawer} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App