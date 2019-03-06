import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {quizzes} from "../assets/quizzes";

export default class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            score: 0
        }
        console.log(this.props.question.questions)
    }


    /*componentDidUpdate(prevProps, prevState){
        if (this.state.counter > length(this.props.qustion.questions)) {

        }
    }*/


     /*Quiz(props){
        if(!this.props.completed){
            return
        } else {
            return <EndScreen score = {this.state.score}/>
        }
    }*/




    checkAnswer (a) {
        if (a == this.props.question[this.state.counter].a[0]){
            Alert.alert(
                "Result",
                "A WINNER IS YOU",
                [
                    {text: 'OK', onPress: () => this.setState({counter: this.state.counter +1, score: this.state.score + 1})}
                ]
            )
        } else {
            Alert.alert(
                "Result",
                "YOU SUCK",
                [
                    {text: 'OK', onPress: () => this.setState({counter: this.state.counter +1})}
                ]
            )
        }
    }


    render(){
        return(
            <View>
                <View>
                    <Text>Question {this.props.question[this.state.counter].q}:  {this.props.question[this.state.counter].q}</Text>
                </View>
                <View>
                    <Button title={this.props.question[this.state.counter].a[0]} onPress={()=>this.checkAnswer(this.props.question[this.state.counter].a[0])}/>
                    <Button title={this.props.question[this.state.counter].a[1]} onPress={()=>this.checkAnswer(this.props.question[this.state.counter].a[1])}/>
                    <Button title={this.props.question[this.state.counter].a[2]} onPress={()=>this.checkAnswer(this.props.question[this.state.counter].a[2])}/>
                    <Button title={this.props.question[this.state.counter].a[3]} onPress={()=>this.checkAnswer(this.props.question[this.state.counter].a[3])}/>
                </View>
            </View>

        )
    }


}