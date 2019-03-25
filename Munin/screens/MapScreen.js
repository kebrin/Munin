import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Map } from '../components/Map'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
})

export default class MapScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
          <Map navigation={this.props.navigation}/>
      </View>
    )
  }
}