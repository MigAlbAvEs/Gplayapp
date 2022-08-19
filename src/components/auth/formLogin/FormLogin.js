import { View } from 'react-native'
import React, {useState} from 'react'
import {Input, Icon, Button} from "react-native-elements"
import { styles } from './FormLogin.styles'
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import {initialValues, validationSchema} from "./FormLogin.data"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {vista} from "../../../utils";
import {useNavigation} from "@react-navigation/native"

export function FormLogin() {
  const [MuestraContra, setMuestraContra] = useState(false);
  const MuestraOcultaContra = () => setMuestraContra((prevState) => !prevState);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
      try{ 
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
        Toast.show({
          type:"success",
          position:"top",
          text1: "Bienvenido, " + formValue.email,
        }) 
        navigation.navigate(vista.Cuenta.Cuenta);
      }catch (error){
        Toast.show({
          type:"error",
          position:"bottom",
          text1: "Usuario o contraseña incorrectos;"
        })
        console.log(error);
      }
      console.log("formulario enviado");
    },
  });

  return (
    <View style={styles.content}>
      <Input 
        placeholder='Correo electrónico' 
        containerStyle={styles.input}
        rightIcon={
            <Icon 
                type="material-community" 
                name="at" 
                iconStyle={styles.icon}/>}
          onChangeText={text => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
      <Input 
        placeholder='Contraseña' 
        containerStyle={styles.input} 
        secureTextEntry={MuestraContra ? false: true}
        rightIcon={
            <Icon 
                type="material-community" 
                name={MuestraContra ? "eye-off-outline":"eye-outline"}
                iconStyle={styles.icon}
                onPress={MuestraOcultaContra}/>}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
      <Button 
        title="Iniciar sesión" 
        containerStyle={styles.btnContainer} 
        buttonStyle={styles.btn} 
        onPress={formik.handleSubmit}
      l oading={formik.isSubmitting}
      />
        
    </View>
  )
}