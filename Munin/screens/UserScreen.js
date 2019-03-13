import React from 'react';
import { Button, SwipeModal, ModalContent } from '../components'
import { Image, ImageBackground, View } from 'react-native'
import Colors from '../constants/Colors'
import MockResults from '../assets/mock_data/results'
import MockQuiz from '../assets/mock_data/quiz'

const ProfileImg = ({size}) => (
  <Image
    source={{uri: 'https://mytek.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg'}}
    resizeMode='cover'
    style={{
      width: size,
      height: size,
      borderRadius: size,
      borderWidth: 2,
      borderColor: Colors.muninDarkBrown,
      overflow: 'hidden',
      marginTop: 80,
    }}
  />
)

export default class UserScreen extends React.Component {
  state = {
    resultsClicked: false,
    quizzesClicked: false,
    resultsTitle: 'Mine resultater',
    quizTitle: 'Quizer i nærheten'
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
    const backgroundStyle = {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    }
    const innerViewStyle = {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
    return (
      <ImageBackground
        source={{uri: 'https://i.pinimg.com/originals/87/c1/2e/87c12ec23d483ebeebe83279af05d359.jpg'}}
        style={backgroundStyle}>
        <ProfileImg size={290} />
        <SwipeModal
          show={this.state.resultsClicked}
          dismiss={this.dismissResults}
          innercomponent={<ModalContent
            title={this.state.resultsTitle}
            data={MockResults}/>
          }/>
        <SwipeModal
          show={this.state.quizzesClicked}
          dismiss={this.dismissQuiz}
          innercomponent={<ModalContent
            title={this.state.quizTitle}
            data={MockQuiz}
            rev={true} //reverse the sorting for km
            dataSuffix='km'
            />
          }/>
        <View style={innerViewStyle}>
          <Button
            title={this.state.resultsTitle}
            color={Colors.muninWhite}
            borderColor={Colors.muninDarkBrown}
            handleChange={this.toggleResult}/>
          <Button
            title={this.state.quizTitle}
            color={Colors.muninWhite} 
            borderColor={Colors.muninDarkBrown}
            handleChange={this.toggleQuiz}/>
        </View>
      </ImageBackground>
    )
  }
}