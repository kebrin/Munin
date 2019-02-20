import React from 'react'
import { View, Text } from 'react-native'
import { MapView, Location, Permissions } from 'expo'
import { mapStyle } from "../assets/map-style";
import { quizzes } from "../assets/quizzes";

export class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
  }

  componentWillMount() {
    setInterval(this._getLocationAsync, 1000)
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest});
    this.setState({ location });
  };

  renderMarkers(){
    return (
      quizzes.map((quiz, idx) =>
        <MapView.Marker
          key={idx}
          coordinate={{latitude: quiz.latitude, longitude: quiz.longitude}}
          image={require('../assets/images/quiz.png')}
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
        customMapStyle={mapStyle}
        minZoomLevel={17}
        maxZoomLevel={17}
        showsUserLocation={true}
        scrollEnabled={false}
        animateToViewingAngle={true}
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