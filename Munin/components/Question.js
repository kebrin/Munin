import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet, Dimensions, Button} from 'react-native';

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
                <View style={styles.answer} key={idx} >
                    <Button title={answer} onPress={()=>this.checkAnswer(answer)}/>
                </View>

        )
        )
    }


    render(){
        return(
            <View>
                <View style={styles.question}>
                    <Text >Question {this.props.counter + 1}:  {this.props.question.q}</Text>
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
        marginHorizontal:5,
        width: Dimensions.get('window').width/2.2,
        height: Dimensions.get('window').height/8,
        color: '#BBD3C3'

    },
    question: {
        flex: 1,
        justifyContent: 'center'
    }
})