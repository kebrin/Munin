import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class EndScreen extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Text>Quiz complete!</Text>
                <Text> Score: {this.props.score}/{this.props.numQuestions}</Text>
            </View>
        )
    }
}