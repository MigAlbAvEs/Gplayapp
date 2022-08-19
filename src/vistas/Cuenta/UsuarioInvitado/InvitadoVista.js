import React from 'react';
import { View, ScrollView } from 'react-native';
import {styles} from "./InvitadoVista.styles";
import {useNavigation} from "@react-navigation/native";
import {Text, Button, Image} from "react-native-elements"
import {vista} from "../../../utils"


export  function InvitadoVista() {

  const navigation = useNavigation();
  
  const irALogin = () => {
    navigation.navigate(vista.Cuenta.Login);
  }
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image source={require("../../../../assets/img/Logo.png")} style={styles.image}/>
      <Text style={styles.title}>Consultar tu perfil de Gplay</Text>
      <Text style={styles.descripcion}>Tus juegos favoritos
      </Text>
     
      <Button 
        title="Ver tu perfil" 
        onPress={irALogin} 
        buttonStyle={styles.btnStyle} />
    </ScrollView>
  )
}