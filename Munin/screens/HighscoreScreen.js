import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
})

export default class HighscoreScreen extends React.Component {
  state = {
    scores: [
      { name: 'Balder', score: 89 },
      { name: 'Siv', score: 36 },
      { name: 'Loke', score: 400 },
      { name: 'Tyr', score: 205 },
      { name: 'Odin', score: 900 },
      { name: 'Idunn', score: 50 },
      { name: 'Heimdall', score: 780 },
      { name: 'Trym', score: 40 },
      { name: 'Mime', score: 102 },
      { name: 'Tyr', score: 200 },
      { name: 'Odin', score: 998 },
      { name: 'Idunn', score: 50 },
      { name: 'Heimdall', score: 745 },
      { name: 'Trym', score: 40 },
      { name: 'Mime', score: 102 },
      { name: 'Tyr', score: 189 },
      { name: 'Odin', score: 999 },
      { name: 'Idunn', score: 50 },
      { name: 'Heimdall', score: 750 },
      { name: 'Trym', score: 40 },
      { name: 'Mime', score: 102 },
      { name: 'Frøya', score: 89 }
    ]
  }

  static navigationOptions = {
    title: 'Toppscore',
  }


  render() {
    this.state.scores = this.state.scores.sort((a, b) => (a.score > b.score) ? -1 : 1)
    return (
      <ScrollView style={{
        flex: 1,
      }}>
        <Text>
          {this.state.title}
        </Text>
        {
          this.state.scores.map((person, idx) =>
              <View key={idx}
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      textAlign: 'left',
                      alignSelf: 'stretch',
                      height: 'auto',
                      fontWeight: 'bold',
                      fontSize: 15,
                      backgroundColor: `rgb(0,${(200-(128/this.state.scores.length)*idx)},${(40/this.state.scores.length)*idx})`,
                      marginBottom: 5,
                      marginRight: 5,
                      marginLeft: 5,
                      padding: 10
                    }}
              >
                <Text style={{
                  fontSize: 25,
                  marginLeft: 50
                }}>{idx+1}.</Text>
                <Text style={{
                  fontSize: 25,
                  marginLeft: 50
                }}>{person.name}</Text>
                <Text style={{
                  fontSize: 25,
                  right: 0,
                  position: 'absolute',
                  marginRight: 50
                }}>{person.score} </Text>
              </View>
          )
        }
      </ScrollView>
    )
  }
}
