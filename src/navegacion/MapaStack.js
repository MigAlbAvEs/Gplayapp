import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MapaVista }  from "../vistas/MapaVista";
import {vista} from "../utils";

const Stack = createNativeStackNavigator();

export function MapaStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Mapa.Mapa } 
        component={MapaVista} 
        options = {{title:"Mapa"}}
        />
      
    </Stack.Navigator>
  )
}