import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Question extends Component{
    constructor(props) {
        super(props);

    }




    componentDidMount(){

    }

    render(){
        return(
            <View>
                <Text>Question {this.props.counter}:  {this.props.question.q}</Text>
            </View>
        )
    }


}