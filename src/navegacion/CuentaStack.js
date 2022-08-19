import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CuentaVista }  from "../vistas/Cuenta/CuentaVista";
import {vista} from "../utils";
import { LoginVista } from "../vistas/Cuenta/VistaLogin/";
import {RegistroVista } from "../vistas/Cuenta/VistaRegistro"

const Stack = createNativeStackNavigator();

export function CuentaStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Cuenta.Cuenta } 
        component={CuentaVista} 
        options = {{title:"Cuenta"}}
        />
        <Stack.Screen 
        name={vista.Cuenta.Login } 
        component={LoginVista} 
        options = {{title:"Iniciar Sesión"}}
        />
        <Stack.Screen 
        name={vista.Cuenta.register } 
        component={RegistroVista} 
        options = {{title:"Crear cuenta"}}
        />
    </Stack.Navigator>
  )
}