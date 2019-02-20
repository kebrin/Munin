import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units'
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight
} from 'react-native';


const Button = ({title, color, handleChange}) => (
  <TouchableOpacity style={{
    width: vw(60),
    height: 70,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }}
    onPress={() => handleChange(true)}
  >
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
      {title}
    </Text>
  </TouchableOpacity>
)

export default class UserScreen extends React.Component {
  state = {
    resultsClicked: false,
    quizzesClicked: false,
  }

  static navigationOptions = {
    title: 'Bruker',
    header: null,
  }

  handleQuizClicked = (val) => {
    alert(this.state.quizzesClicked)
    if (!val) {
      this.state.quizzesClicked = val
    }
  }

  handleResultsClicked = (val) => {
    this.setState({resultsClicked: val})
  }

  render() {
    const PROFILE_SIZE = vw(70)
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold',
        flex: 1,
      }}>
        <ImageBackground
          source={{uri: 'https://media.istockphoto.com/photos/bald-man-profile-picture-id509728759'}}
          style={{
            width: PROFILE_SIZE,
            height: PROFILE_SIZE,
            borderRadius: PROFILE_SIZE,
            borderWidth: 20,
            borderColor: 'seagreen',
            overflow: 'hidden',
            marginTop: 100,
          }}
        />
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button title={'Mine resultater!'} color={'coral'}
            handleChange={this.handleResultsClicked}/>
          {/* <Button title={'Quizzer i nærheten 🤨'} color={'plum'} /> */}
          <Modal animationType="slide"
            transparent={true}
            visible={this.state.resultsClicked}
            onRequestClose={() => {}}
            >
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: vw(100),
              height: 300
            }}>
                <TouchableHighlight
                  onPress={() => {this.handleResultsClicked(false)}}
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red'
                  }}
                  >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
            </View>
          </Modal>
        </View>
      </View>
    )
  }
}