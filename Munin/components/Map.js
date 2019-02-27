import React from 'react'
import { View, Text, Alert } from 'react-native'
import { MapView, Location, Permissions } from 'expo'
import { mapStyle } from "../assets/map-style";
import { quizzes } from "../assets/quizzes";

export class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {
          coords: {
              longitude: 10.385370,
              latitude: 63.428898
          }
      },
      modalVisible: false,
      permission: null
    };
  }

  componentWillMount() {
    this._getPermission()
      setInterval(this._getLocationAsync, 1000)
  }

  _getPermission = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
          this.setState({
              errorMessage: 'Permission to access location was denied',
          });
      } else {
          this.setState({
              permission: status
          })
      }
  };

  _getLocationAsync = async () => {
      if (this.state.permission === 'granted') {
          let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest});
          this.setState({ location });
      }
  };

  markerPressed = e => {
      const haversine = require('haversine')
      // check if user is withing range
      let data = e.nativeEvent;
      let start = this.state.location.coords;
      let end = data.coordinate;
      console.log(this.state.location.coords)
      console.log(data.coordinate)

      if (haversine(start, end, {unit: 'meter', threshold: 50})) {
          Alert.alert(data.id, data.coordinate.latitude.toString() + " " + data.coordinate.longitude.toString())
      } else {
          Alert.alert("Out of range :(", "Please walk your sorry ass over there")
      }
      // this.setState({modalVisible: true})
  };

  renderMarkers(){
    return (
      quizzes.map((quiz, idx) =>
        <MapView.Marker
          identifier={quiz.id.toString()}
          key={idx}
          coordinate={{latitude: quiz.latitude, longitude: quiz.longitude}}
          image={require('../assets/images/quiz.png')}
          onPress={this.markerPressed}
        />
      )
    )
  }

  render() {

    let map;

    if (this.state.location !== null) {
      map = <MapView
        style={{ flex: 1 }}
        region={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        provider={'google'}
        customMapStyle={mapStyle}
        zoomEnabled={false}
        rotateEnabled={false}
        minZoomLevel={14} //
        maxZoomLevel={14} // 17 works fine
        showsUserLocation={true}
        scrollEnabled={false}
        moveOnMarkerPress={false}
      >
        {this.renderMarkers()}
      </MapView>
    } else {
      map = <View style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
        <Text>No gps signal</Text>
      </View>
    }

    return (
      map
    )
  }
}