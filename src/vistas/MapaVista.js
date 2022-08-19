import * as React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const carImage = require('../../assets/img/car.png')

export function MapaVista() {

  const [origin, setOrigin] = React.useState({
    latitude: 20.6539495,
    longitude: -100.4082825,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
      }}
    />
        
        
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
