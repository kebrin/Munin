import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default class Question extends Component{

    //Button handler, check for correct answers
    checkAnswer (a) {
        if (a === this.props.question.correctAnswer){
            Alert.alert(
                "Result",
                "A WINNER IS YOU",
                [
                    {text: 'OK', onPress: () => this.props.incrementScore(true)}
                ]
            )
        } else {
            Alert.alert(
                "Result",
                "YOU SUCK",
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
        let shuffled = this.props.question.a
        this.shuffleArray(shuffled)
        return (
            shuffled.map((answer, idx) =>
            <Button title={answer} key={idx} onPress={()=>this.checkAnswer(answer)}/>
        )
        )
    }


    render(){
        return(
            <View>
                <View>
                    <Text>Question {this.props.question.q}:  {this.props.question.q}</Text>
                </View>
                <View>
                {this.renderAnswers()}
                </View>
            </View>

        )
    }


}