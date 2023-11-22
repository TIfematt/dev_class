import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import back from '../assets/back.png'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}
    > 
      <TouchableOpacity style={{
          position: 'absolute',
          left: 0,
          top: 0,
          marginTop: 32,
          marginLeft: 12,
          backgroundColor: 'green',
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          paddingRight: 5
        }}
        onPress={() => navigation.navigate('login')}
      >
        <Image 
          source={back}
          style={{
            height: 50,
            aspectRatio: '1/3'
          }}
        />
      </TouchableOpacity>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen