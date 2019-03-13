import React, {Component} from 'react';
import {View, Text, AsyncStorage, Alert} from 'react-native';
import Question from "../components/Question";
import {quizzes} from "../assets/quizzes";
import EndScreen from "./EndScreen";

export default class QuizScreen extends Component {
    questionList = [];
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


    _retrieveData = async () => {
        try {
            let value = await AsyncStorage.getItem('QUIZ');
            if (value !== null) {
                // We have data!!
                console.log(value);
                this.questionList = JSON.parse(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };


    componentDidMount() {
        //this._retrieveData();
    }

    checkAnswer (a) {
        if (a == this.props.question.a[0]){
            Alert.alert(
                "Result",
                "A WINNER IS YOU",
                [
                    {text: 'OK', onPress: () => this.setState( prevState => {
                            return{counter: prevState.counter +1, score: prevState.score + 1
                            }}
                        )}
                ]
            )
        } else {
            Alert.alert(
                "Result",
                "YOU SUCK",
                [
                    {
                        text: 'OK', onPress: () => this.setState({counter: this.state.counter +1})
                    }
                ]
            )
        }
    }

    incrementScore(correctAnswer){
        let currentScore = this.state.score
        console.log("Counter before increment " +this.state.counter)
        this.setState(  prevState => {
            return{ counter: prevState.counter + 1
            }})
        if(this.state.counter >= (quizzes[this.state.quizId].questions.length)){
            this.setState( prevState => {
                return{ completed: !prevState
                }})
        }
        console.log("Completed state after check "+this.state.completed)
        console.log("Counter after increment" + this.state.counter)
        if(correctAnswer){
            this.setState( prevState => {
                return{ score: prevState.score + 1
                }})
        }
    }

    QuizProgress(completed){
        console.log("Check quizProgress " +completed)
        if(completed){
            return <EndScreen numQuestions={quizzes[this.state.quizId].questions.length} score={this.state.score}  />
        }
        return <Question incrementScore = {this.incrementScore} question = {quizzes[this.state.quizId].questions[this.state.counter]}></Question>
    }



    static navigationOptions = {
        header: null,
    }

    render() {
        let map;
        return(
            <View>
                {this.QuizProgress(this.state.completed)}
                <Text>Score: {this.state.score}/{quizzes[this.state.quizId].questions.length}</Text>
            </View>
        );
    }
}

