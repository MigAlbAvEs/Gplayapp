import React from 'react'
import { View } from 'react-native'
import {styles} from "./RegistroVista.Styles"
import {Image} from "react-native-elements"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {FormRegistro} from "../../../components/auth/formRegistro"

export  function RegistroVista() {
  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../../assets/img/Logo.png")} 
      style={styles.image}/>
      <View style={styles.content}>
        <FormRegistro />
      </View>
    </KeyboardAwareScrollView>
  )
}