import * as React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env';

const carImage = require('../../assets/img/car.png')

export function MapaVista() {

  

  const [origin, setOrigin] = React.useState({
    latitude: 20.6539495,
    longitude: -100.4082825,
  });
  const [place1, setPlace1] = React.useState({
    latitude: 20.6539495,
    longitude: -100.4082825,
  });
  const [place2, setPlace2] = React.useState({
    latitude: 20.5763931,
    longitude: -100.420089,
  });

   const [place3, setPlace3] = React.useState({
    latitude: 20.6045147,
    longitude: -100.4520181,
  });


  const [destination, setDestination] = React.useState({
    latitude: 33.753746,
    longitude: -84.386330,
  });

  React.useEffect(() => {
    getLocationPermission();
  }, [])

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted') {
      alert('Permission denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    setOrigin(current);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
      }}>

      <Marker 
      draggable
      coordinate={origin}
      image={carImage}
      onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
    />
    <Marker 
      draggable
      coordinate={place1}
      onDragEnd={(direction) => setPlace3(direction.nativeEvent.coordinate)}
    />
     <Marker 
      draggable
      coordinate={place2}
      onDragEnd={(direction) => setPlace3(direction.nativeEvent.coordinate)}
    />
     <Marker 
      draggable
      coordinate={place3}
      onDragEnd={(direction) => setPlace3(direction.nativeEvent.coordinate)}
    />
    <MapViewDirections
      origin={origin}
      destination={place3}
      apikey={GOOGLE_MAPS_KEY}
      strokeColor="blue"
      strokeWidth={4}
    />
    
        
    </MapView>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
