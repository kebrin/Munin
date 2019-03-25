import React, {Component} from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import Question from "../components/Question";

export default class QuizScreen extends Component {
    constructor(props) {
        super(props);
        this.incrementScore = this.incrementScore.bind(this);
        this.state = {
            quizId: 2,
            counter: 0,
            score: 0,
            completed: false
        };
        this.quiz = this.props.navigation.getParam('quiz')
    }

    incrementScore(correctAnswer){
      if (this.state.counter === this.quiz.questions.length-1) {
        let score = this.state.score;
        if (correctAnswer) {
          score++;
        }
        this.props.navigation.navigate("End", {score: score, len: this.quiz.questions.length})
        return
      }

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



    static navigationOptions = {
        header: null,
    }

    render() {
        return (
          <View style={styles.container}>
            <View>
                <Question counter={this.state.counter} incrementScore={this.incrementScore}
                          question={this.quiz.questions[this.state.counter]}/>
            </View>
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
        backgroundColor: '#F9F7EF',
        paddingBottom: 30
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

