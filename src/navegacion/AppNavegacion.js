import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {vista} from "../utils";
import { CuentaStack } from "./CuentaStack";
import { MapaStack } from "./MapaStack";

const Tab = createBottomTabNavigator();

export function AppNavegacion(){
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: "#224e79",
            tabBarInactiveTintColor: "#7c7c7c",
            showIcon: true,
            tabBarIcon: ({color, size}) => screenOptions(route, color, size),

        })}>
            <Tab.Screen name={vista.Mapa.tab} component={MapaStack} options={{title: "Mapa"}} />
            <Tab.Screen name={vista.Cuenta.tab} component={CuentaStack} options={{title: "Cuenta"}} />
        </Tab.Navigator>
    );
}

function screenOptions (route, color, size){
    let iconName; 
    if(route.name === vista.Mapa.tab)
    iconName = "compass-outline";

    if(route.name === vista.Cuenta.tab)
    iconName = "home-outline";

    return(
        <Icon type="material-community" name={iconName} color={color} size={size} />
    )
}