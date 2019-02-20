import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default class Question extends Component{
    constructor(props) {
        super(props);

    }

    checkAnswer (a) {
        if (a == this.props.question.a[0]){
            Alert.alert(
                "Result",
                "A WINNER IS YOU",
                [{text: 'OK', onPress: () => console.log('OK pressed')}]
            )
        } else {
            Alert.alert(
                "Result",
                "YOU SUCK",
                [{text: 'OK', onPress: () => console.log('OK pressed')}]
            )
        }
    }


    render(){
        return(
            <View>
                <View>
                    <Text>Question {this.props.counter}:  {this.props.question.q}</Text>
                </View>
                <View>
                    <Button title={this.props.question.a[0]} onPress={()=>this.checkAnswer(this.props.question.a[0])}></Button>
                    <Button title={this.props.question.a[1]} onPress={()=>this.checkAnswer(this.props.question.a[1])}></Button>
                    <Button title={this.props.question.a[2]} onPress={()=>this.checkAnswer(this.props.question.a[2])}></Button>
                    <Button title={this.props.question.a[3]} onPress={()=>this.checkAnswer(this.props.question.a[3])}></Button>
                </View>
            </View>

        )
    }


}