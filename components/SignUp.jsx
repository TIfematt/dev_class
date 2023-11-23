import { View, Text, ScrollView, Keyboard, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from '@rneui/themed';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = () => {
    // if(!email && !password && !confirmPassword)  {
    //   return
    // }
    // if(password !== confirmPassword) {
    //   return
    // }
    navigation.navigate('login')
  }

  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'green'
      }}
    > 
      <ScrollView 
        contentContainerStyle={{
          flex: 1, 
          justifyContent: 'center',
        }}
      >
        <Text style={{
          fontSize: 24,
          color: 'white',
          textAlign: 'center',
          marginBottom: 24
        }}
        >
          Sign Up
        </Text>
        <View style={{
            gap: 20
          }}
        >
          <Input 
            placeholder= 'Full Name'
            containerStyle={{
              height: 40,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'white',
              borderRadius: 10
            }}
            onChangeText={value => setFullName(value)}
          />
          <Input 
            placeholder= 'Occupation'
            containerStyle={{
              height: 40,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'white',
              borderRadius: 10
            }}
            onChangeText={value => setOccupation(value)}
          />
          <Input 
            placeholder= 'Email Address'
            containerStyle={{
              height: 40,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'white',
              borderRadius: 10
            }}
            onChangeText={value => setEmail(value)}
          />
          <Input 
            placeholder= 'Password'
            containerStyle={{
              height: 50,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'white',
              borderRadius: 10
            }}
            onChangeText={value => setPassword(value)}

          />
          <Input 
            placeholder= 'Confirm Password'
            containerStyle={{
              height: 40,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'white',
              borderRadius: 10
            }}
            onChangeText={value => setConfirmPassword(value)}
          />
          <Button 
            title='Sign Up'
            loading={isLoading}
            loadingProps={{
              size: 'small',
              color: 'rgba(111, 202, 186, 1)',
            }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: 'green',
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 5,
              paddingVertical: 10,
            }}   
            onPress={onSubmit}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
    
  )
}

export default SignUp