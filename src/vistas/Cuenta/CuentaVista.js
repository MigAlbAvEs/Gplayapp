import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {InvitadoVista} from "./UsuarioInvitado/InvitadoVista";
import { RegistradoVista } from './RegistradoVista/RegistradoVista';
import { LoadingModal } from "../../components"

export  function CuentaVista() {
  const[Accedido, setAccedido]= useState(null);
  
  useEffect(() => {
    /*console.log("Hola");*/
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      /*console.log(user);*/
      setAccedido(user ? true : false);
    })
  }, [])

  if(Accedido === null)
  {
    return <InvitadoVista />
  }
  return Accedido ? <RegistradoVista/> : <InvitadoVista/>;
}