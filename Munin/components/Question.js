import React, {Component} from 'react';
import Colors from '../constants/Colors.js'
import {View, Text, Alert, StyleSheet, Dimensions, Button, TouchableOpacity} from 'react-native';

export default class Question extends Component{

    //Button handler, check for correct answers
    checkAnswer (a) {
        if (a === this.props.question.correctAnswer){
            Alert.alert(
                "Riktig!",
                "",
                [
                    {text: 'OK', onPress: () => this.props.incrementScore(true)}
                ]
            )
        } else {
            Alert.alert(
                "Galt!",
                "Riktig svar er: " + this.props.question.correctAnswer,
                [
                    {text: 'OK', onPress: () => this.props.incrementScore(false)}
                ]
            )
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];

        }
    }

    renderAnswers() {
        let shuffled = this.props.question.a;
        this.shuffleArray(shuffled);
        return (
            shuffled.map((answer, idx) =>
              <TouchableOpacity onPress={() => this.checkAnswer(answer)} key={idx}>
                  <View style={styles.answer}>
                      <Text style={styles.centeredText}>{answer}</Text>
                  </View>
              </TouchableOpacity>
            )
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.question}>
                    <Text style={styles.centeredText}>{this.props.counter + 1}:  {this.props.question.q}</Text>
                </View>
                <View style={styles.answers}>
                {this.renderAnswers()}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    answers: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    answer:{
        width: Dimensions.get('window').width/2.15,
        height: Dimensions.get('window').height/8,
        backgroundColor: Colors.muninBeige,
        margin: 5,
        justifyContent: "space-around"
    },
    question: {
        flex: 1,
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: "center",
        fontSize: 20
    },
  container: {
      backgroundColor: Colors.muninWhite,
    flex: 1
  }
})