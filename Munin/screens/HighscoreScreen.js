import React from 'react';
import Colors from '../constants/Colors.js'
import { list } from '../assets/styles/list'
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
        backgroundColor: Colors.muninLightBrown,
      }}>
        <Text>
          {this.state.title}
        </Text>
        {
          this.state.scores.map((person, idx) =>
              <View key={idx}
                    style={[list.view, {
                      height: 'auto',
                      backgroundColor: Colors.muninBeige,
                      //backgroundColor: `rgb(0,${(200-(128/this.state.scores.length)*idx)},${(40/this.state.scores.length)*idx})`,
                      marginBottom: 5,
                    }]}
              >
                  <Text style={[list.left, {width: 40}]}>{idx+1}.</Text>
                  <Text style={{fontSize: 20}}>{person.name}</Text>
                <Text style={list.right}>{person.score} </Text>
              </View>
          )
        }
      </ScrollView>
    )
  }
}
