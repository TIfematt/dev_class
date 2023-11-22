import { View, Text } from 'react-native'
import React from 'react'
import { Input, Button } from '@rneui/themed';


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
          fontSize: 24, 
          marginBottom: 12
        }}
      >
        Welcome to NITDA training Class
        </Text>
      <Button 
        title='Login'
        onPress={() => navigation.navigate('login')}
      />
    </View>
  )
}

export default WelcomeScreen