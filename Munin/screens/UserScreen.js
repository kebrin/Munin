import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
})

export default class UserScreen extends React.Component {
  state = {
  }

  static navigationOptions = {
    title: 'Bruker'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.title}
        </Text>
      </View>
    )
  }
}