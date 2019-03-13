import React from 'react'
import { Text } from 'react-native'

export const PositionText = ({top, text}) => (
  <Text style={{
    top: top ? 0 : 'auto',
    bottom: top ? 'auto': 0,
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold'
  }}>{text}</Text>
)