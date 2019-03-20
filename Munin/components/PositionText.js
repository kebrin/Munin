import React from 'react'
import { Text } from 'react-native'

export const PositionText = ({top, text, size}) => (
  <Text style={{
    top: top ? 0 : 'auto',
    bottom: top ? 'auto': 0,
    position: 'absolute',
    fontSize: size,
    margin: 5,
  }}>{text}</Text>
)