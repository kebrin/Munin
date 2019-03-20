import React, {Component} from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import Question from "../components/Question";
import {quizzes} from "../assets/quizzes";
import EndScreen from "./EndScreen";

export default class QuizScreen extends Component {
    constructor(props) {
        super(props);
        this.incrementScore = this.incrementScore.bind(this);
        this.state = {
            quizId: 2,
            counter: 0,
            score: 0,
            completed: false
        }
        this.quiz = quizzes[this.state.quizId]
    }

    incrementScore(correctAnswer){
        if(correctAnswer){
            this.setState(prevState => {
                return {score: prevState.score + 1,
                counter: prevState.counter + 1,
                completed: prevState.counter + 1 === this.quiz.questions.length
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    counter: prevState.counter + 1,
                    completed: prevState.counter + 1 === this.quiz.questions.length
                }
            })
        }
    }

    QuizProgress(completed){
        if(completed){
            return <View style={styles.endScore}><EndScreen numQuestions={this.quiz.questions.length} score={this.state.score}  /></View>
        }
        return <View>
                    <Question counter={this.state.counter} incrementScore = {this.incrementScore} question = {this.quiz.questions[this.state.counter]} />
                    <Text>Score: {this.state.score}/{this.quiz.questions.length}</Text>
                </View>
    }



    static navigationOptions = {
        header: null,
    }

    render() {
        return(
            <View style={styles.container}>
                {this.QuizProgress(this.state.completed)}
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F7EF'
    },
    endScore: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F9F7EF'
    }
});

