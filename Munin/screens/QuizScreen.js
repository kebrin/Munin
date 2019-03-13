import React, {Component} from 'react';
import {View, Text, AsyncStorage, Alert} from 'react-native';
import Question from "../components/Question";
import {quizzes} from "../assets/quizzes";
import EndScreen from "./EndScreen";

export default class QuizScreen extends Component {
    constructor(props) {
        super(props);
        this.incrementScore = this.incrementScore.bind(this);
        this.state = {
            quizId: 0,
            counter: 0,
            score: 0,
            completed: false
        }
    }

    incrementScore(correctAnswer){
        if(correctAnswer){
            this.setState(prevState => {
                return {score: prevState.score + 1,
                counter: prevState.counter + 1,
                completed: prevState.counter + 1 === quizzes[this.state.quizId].questions.length
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    counter: prevState.counter + 1,
                    completed: prevState.counter + 1 === quizzes[this.state.quizId].questions.length
                }
            })
        }
    }

    QuizProgress(completed){
        if(completed){
            return <EndScreen numQuestions={quizzes[this.state.quizId].questions.length} score={this.state.score}  />
        }
        console.log("Asking new question....")
        console.log(quizzes[this.state.quizId].questions[this.state.counter])
        return <Question incrementScore = {this.incrementScore} question = {quizzes[this.state.quizId].questions[this.state.counter]} />
    }



    static navigationOptions = {
        header: null,
    }

    render() {
        return(
            <View>
                {this.QuizProgress(this.state.completed)}
                <Text>Score: {this.state.score}/{quizzes[this.state.quizId].questions.length}</Text>
            </View>
        );
    }
}

