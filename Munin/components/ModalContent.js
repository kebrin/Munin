import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { PositionText } from './PositionText'
import Colors from '../constants/Colors'
import { Button } from 'react-native';

export const ModalContent =
  ({title, data, rev=false, dataSuffix='poeng', onclick}) => (
  <View style={{
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 500
  }}>
    <PositionText top={true} text={title} size={25}/>
    <ScrollView style={{
      borderTopColor: 'black',
      borderTopWidth: 2,
      flex: 1,
      width: '90%',
      height: '100%',
      marginTop: 50,
    }}>
      {
        data.sort((a, b) => (a.metric > b.metric) ? (rev?1:-1) : (rev?-1:1)).map((metric, idx) =>
          <View key={idx}
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              textAlign: 'left',
              alignSelf: 'stretch',
              height: 'auto',
              fontSize: 15,
              padding: 15,
          }}>
            <Text>{metric.name}</Text>
            <Text style={{
              position: 'absolute',
              right: 0,
            }}>{metric.metric} {dataSuffix}
            </Text>
            <Button onPress={() => onclick} title='test pls'/>
          </View>
        )
      }
    </ScrollView>
  </View>
)