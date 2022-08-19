import React from 'react';
import { View, ScrollView } from 'react-native';
import {Text, Image} from "react-native-elements";
import {styles} from "./LoginVista.styles";
import { useNavigation } from '@react-navigation/native';
import {vista} from "../../../utils"
import { FormLogin } from "../../../components/auth/formLogin"

export  function LoginVista() {

  const navigation = useNavigation();

  const IrARegistro = () => {
    navigation.navigate(vista.Cuenta.register)
  }

  return (
    <ScrollView>
      <Image source={require("../../../../assets/img/Logo.png")} 
      style={styles.image}/>
      <View style={styles.content}>
        <FormLogin/>
        <Text style={styles.textRegistro}>
          ¿Aún no tienes cuenta?
          <Text 
            style={styles.btnRegistro} 
            onPress={IrARegistro} >Registrarse</Text>
        </Text>
      </View>
      
    </ScrollView>
  )
}