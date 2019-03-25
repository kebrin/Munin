import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { PositionText } from './PositionText'

export const MapModal = ({quiz, onClick}) => (
    <View style={{
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: 500
    }}>
        <PositionText top={true} text={quiz.name} />
        <Button onPress={onClick} title={quiz.name} />
        <PositionText top={false} text='Swipe up to close 🙃☝' />
    </View>
)