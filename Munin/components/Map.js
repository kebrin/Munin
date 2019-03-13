import React from 'react'
import { View, Text, Alert } from 'react-native'
import { MapView, Location, Permissions } from 'expo'
import { mapStyle } from "../assets/map-style";
import { quizzes } from "../assets/quizzes";
import {SwipeModal} from "./SwipeModal";
import {ModalContent} from "./ModalContent";

const haversine = require('haversine')

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
      permission: null,
      activeQuiz: 0
    };
    this.hideModal = this.hideModal.bind(this);
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
      // check if user is withing range
      let data = e.nativeEvent;
      let start = this.state.location.coords;
      let end = data.coordinate;
      console.log(this.state.location.coords)
      console.log(data.coordinate)

      if (haversine(start, end, {unit: 'meter', threshold: 50})) {
          // Alert.alert(data.id, data.coordinate.latitude.toString() + " " + data.coordinate.longitude.toString())
          this.setState({activeQuiz: data.id})
          this.setState({modalVisible: true})
      } else {
          Alert.alert("Utenfor rekkevidde :(", "Du må være maks 50 meter unna. Du er nå " + haversine(start, end, {unit: 'meter'}).toFixed(0) + " meter unna.")
      }
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

  hideModal() {
      this.setState({modalVisible: false})
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
        //zoomEnabled={false}
        rotateEnabled={false}
        //minZoomLevel={17} //
        maxZoomLevel={17} // 17 works fine
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
        <View style={{flex: 1}}>
            {map}
            <SwipeModal show={this.state.modalVisible} dismiss={this.hideModal} innercomponent={<ModalContent title={this.state.activeQuiz}/>}/>
        </View>
    )
  }
}