import React from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units'
import Modal from 'react-native-modal'
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';

const ProfileImg = ({size}) => (
  <ImageBackground
    source={{uri: 'https://i.imgur.com/itElfV3.jpg'}}
    resizeMode='contain'
    style={{
      width: size,
      height: size,
      borderRadius: size,
      borderWidth: 20,
      borderColor: 'seagreen',
      overflow: 'hidden',
      marginTop: 100,
      marginRight: 20,
    }}
  />
)

const PositionText = ({top, text}) => (
  <Text style={{
    top: top ? 0 : 'auto',
    bottom: top ? 'auto': 0,
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold'
  }}>{text}</Text>
)

const CustomModal = ({show, dismiss, innercomponent}) => (
  <Modal children={innercomponent}
    isVisible={show}
    animationIn="slideInUp"
    animationOut="zoomOutUp"
    animationInTiming={400}
    animationOutTiming={1000}
    transparent={true}
    backdropColor='black'
    backdropOpacity={.5}
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={500}
    onBackdropPress={dismiss}
    onBackButtonPress={dismiss}
    onSwipe={dismiss}
    swipeDirection="up"
    >
  </Modal>
)

const ModalContent = ({title}) => (
  <View style={{
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 500
  }}>
    <PositionText top={true} text={title} />
    <PositionText top={false} text='Swipe up to close 🙃☝' />
  </View>
)

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

const BigText = ({text}) => (
  <Text style={{
    bottom: 0,
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold'
  }}>
    {text}
  </Text>
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

  dismissResults = () => { this.setState({ resultsClicked: false })}
  toggleResult = () => { this.setState({ resultsClicked: !this.state.resultsClicked})}

  dismissQuiz = () => { this.setState({ quizzesClicked: false })}
  toggleQuiz = () => { this.setState({ quizzesClicked: !this.state.quizzesClicked})}


  render() {
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold',
        flex: 1,
        flexDirection: 'column'
      }}>
        <ProfileImg size={vw(70)} />
        <CustomModal
          show={this.state.resultsClicked}
          dismiss={this.dismissResults}
          innercomponent={<ModalContent title='Results!'/>}/>
        <CustomModal
          show={this.state.quizzesClicked}
          dismiss={this.dismissQuiz}
          innercomponent={<ModalContent title='Quizzer i nærheten!'/>}/>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button
            title={'Mine resultater!'}
            color={'coral'}
            handleChange={this.toggleResult}/>
          <Button
            title={'Quizzer i nærheten 🤨'}
            color={'plum'} 
            handleChange={this.toggleQuiz}/>
        </View>
      </View>
    )
  }
}