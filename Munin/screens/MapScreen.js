import React from 'react';
import { mapStyle } from "../assets/map-style";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MapView } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
})

export default class MapScreen extends React.Component {
  state = {
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 63.42889,
                longitude: 10.38536,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            customMapStyle={mapStyle}
            minZoomLevel={17}
            maxZoomLevel={17}
          >
        <MapView.Marker
            coordinate={{latitude: 63.42889, longitude: 10.38536}}
            image={require('../assets/images/quiz.png')}
        />
          </MapView>
      </View>
    )
  }
}