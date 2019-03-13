import React from 'react'
import { View, Text } from 'react-native'
import { PositionText } from './PositionText'

export const ModalContent = ({title}) => (
  <View style={{
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 500
  }}>
    <PositionText top={true} text={title} />
    <Text>
      Some text here
    </Text>
    <PositionText top={false} text='Swipe up to close 🙃☝' />
  </View>
)