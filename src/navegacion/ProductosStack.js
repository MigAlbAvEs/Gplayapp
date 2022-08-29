import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductosVista }  from "../vistas/ProductosVista";
import {vista} from "../utils";

const Stack = createNativeStackNavigator();

export function ProductosStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Productos.Productos } 
        component={ProductosVista} 
        options = {{title:"Productos"}}
        />
      
    </Stack.Navigator>
  )
}