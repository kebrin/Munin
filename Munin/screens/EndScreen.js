import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class EndScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      header: null,
    }

    render() {
      const score = this.props.navigation.getParam("score");
      const len = this.props.navigation.getParam("len");
        return (
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.bigText}>Quiz ferdig!</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.bigText}>Poeng: {score}/{len}</Text>
              </View>
                <Button onPress={() => {this.props.navigation.navigate("Home")}} title=" Tilbake " />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F7EF',
    paddingBottom: 30
  },
  textContainer: {
    padding: 10
  }
});