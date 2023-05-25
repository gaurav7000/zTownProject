import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Address({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', right: 11 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Bold' }}>Address</Text>
        </View>
      ),
    });
  }, [navigation]);

  const [state, setState] = useState({
    data: '',
    latitude: 19.30222787712001,
    longitude: 73.05681623518467,
  });

  const movementMarker = (e) => {
    const latitude = e.nativeEvent.coordinate.latitude;
    const longitude = e.nativeEvent.coordinate.longitude;
    setState({
      ...state,
      latitude: latitude,
      longitude: longitude,
    });
  };

  const onClickMap = (e) => {
    const { latitude, longitude } = e.coordinate;
    setState({
      ...state,
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapView
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        initialRegion={{
          latitude: state.latitude,
          longitude: state.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.002,
        }}
        onPress={(e) => onClickMap(e.nativeEvent)}
      >
        <Marker draggable coordinate={{ latitude: state.latitude, longitude: state.longitude }} title="Aqui estoy" onDragEnd={(e) => movementMarker(e)} />
      </MapView>
    </View>
  );
}
