import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import Question from "../components/Question";
import {questions} from "../assets/questions";

export default class QuizScreen extends Component {
    questionList = [];
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
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


    static navigationOptions = {
        header: null,
    }

    render() {
        return(
            <View>
                <Text>Hello World!</Text>
                <Question counter={this.state.counter} question = {questions.question[this.state.counter]}></Question>
            </View>
        );
    }
}

