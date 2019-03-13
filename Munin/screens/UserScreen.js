import React from 'react';
import { vw, vh } from 'react-native-expo-viewport-units'
// import Modal from 'react-native-modal'
import { Button, SwipeModal, ModalContent } from '../components'

import { ImageBackground, View } from 'react-native';

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
        <SwipeModal
          show={this.state.resultsClicked}
          dismiss={this.dismissResults}
          innercomponent={<ModalContent title='Results!'/>}/>
        <SwipeModal
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