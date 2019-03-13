import React from 'react'
import { vw } from 'react-native-expo-viewport-units'
import { TouchableOpacity, Text} from 'react-native'

export const Button = ({title, color, handleChange}) => (
  <TouchableOpacity style={{
    width: vw(60),
    height: 70,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }}
    onPress={() => handleChange(true)}
  >
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
      {title}
    </Text>
  </TouchableOpacity>
)
