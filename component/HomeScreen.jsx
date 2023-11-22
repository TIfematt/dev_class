import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}
    >
      <TouchableOpacity 
        onPress={() => navigation.navigate('login')}
        style={{
          position: 'absolute',
          top: 30,
          left: 0,
        }}
      >
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'green',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center'
          }}
        >
          <View style={{
            width: 30,
            height: 2,
            backgroundColor: 'white'
          }}>
          </View>
        </View>
      </TouchableOpacity>
     
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen