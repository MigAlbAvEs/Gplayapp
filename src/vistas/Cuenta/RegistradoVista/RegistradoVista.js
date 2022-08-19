import React, { useState } from 'react'
import { View } from 'react-native'
import {Button} from "react-native-elements"
import {UsuarioInfo} from "../../../components/Cuenta";
import {styles} from "./RegistradoVista.styles";
import { getAuth, signOut} from "firebase/auth";
import {LoadingModal} from "../../../components";


export function RegistradoVista() {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const salir = async () => {
    const auth = getAuth();
    await signOut(auth);
  }
  return (
    <View >
      <UsuarioInfo setLoading={setLoading} setLoadingText={setLoadingText}/>

      <Button 
        title="Cerrar Sesión" 
        buttonStyle={styles.btnStyles} 
        titleStyle={styles.btnTextStyle}
        onPress={salir}
        />

        <LoadingModal show={loading} text={loadingText} />
    </View>
  )
}