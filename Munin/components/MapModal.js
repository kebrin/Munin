import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

export const MapModal = ({quiz, onClick}) => (
    <View style={{
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: 500
    }}>
      <View style={styles.modalTextContainer}>
        <Text style={styles.modalText}>{quiz.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onClick} title={"Start quiz"} />
      </View>
    </View>
)

const styles = StyleSheet.create({
  modalText: {
    fontSize: 20,
    textAlign: "center"
  },
  modalTextContainer: {
    flex: 4,
    justifyContent: "space-around"
  },
  buttonContainer:  {
    flex: 1
  }
});