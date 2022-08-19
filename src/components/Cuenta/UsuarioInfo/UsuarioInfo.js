import { View} from 'react-native'
import React, {useState} from 'react'
import {Avatar, Text} from "react-native-elements";
import {getAuth, updateProfile} from "firebase/auth"
import {styles} from "./UsuarioInfo.styles";
import * as ImagePicker from "expo-image-picker";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";


export function UsuarioInfo(props) {
    const {setLoading, setLoadingText}= props;
    const {uid, photoURL, email, displayName} = getAuth().currentUser;
    const [avatar, setAvatar] = useState(photoURL);
    

    const cambiaAvatar = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
      console.log(result)
      if(!result.cancelled) subeImagen(result.uri);
    };

    const subeImagen = async (uri) => {

      setLoadingText("Actualizando Avatar...")
      setLoading(true)

      const response = await fetch(uri);
      const blob = await response.blob();
      const storage = getStorage();
      const storageRef = ref(storage, `avatar/${uid}`);

      uploadBytes(storageRef, blob).then((snapshot) => {
        updateFotorUrl(snapshot.metadata.fullPath)

      })
    }

  const updateFotorUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);

    const auth = getAuth();

    updateProfile(auth.currentUser, {photoURL: imageUrl});

    setAvatar(imageUrl);

    setLoading(false)

    console.log(imagePath)
  }

  return (
    <View style={styles.content}>
      <Avatar 
      size="large" 
      rounded 
      containerStyle={styles.avatar}
      icon={{type:"material", name:"person"}}
      source={{uri: avatar}}
      >
        <Avatar.Accessory size={24} onPress={cambiaAvatar}/>
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}