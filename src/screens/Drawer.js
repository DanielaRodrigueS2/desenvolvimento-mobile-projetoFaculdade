import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomDrawer from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator()

const Drawer = () =>{

    return(
        <DrawerNavigator.Navigator
            drawerContent={(props) => <CustomDrawer{...props} />}
            screenOptions={{ 
                drawerStyle:{
                    backgroundColor:'#2B1F5C'
                },
                headerStyle:{
                    backgroundColor: '#2B1D62',
                    height: 50
                },
                headerTintColor: 'white',
                headerTitle: ''
        }}
        >
            <DrawerNavigator.Screen name="Home" component={Home}/>
        </DrawerNavigator.Navigator>
    )

}

export default Drawer