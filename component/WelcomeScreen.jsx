import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Input, Button } from '@rneui/themed';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}
    >
      <View style={{ gap: 10 }}>
        <Text>Welcome To Nitda Training Program</Text>
        <Button
          title='Login'
          onPress={() => navigation.navigate('login')}
        />
        <Button
          title='Signup'
          onPress={() => navigation.navigate('signup')}
        />
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen