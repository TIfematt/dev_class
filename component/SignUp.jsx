import { View, Text, ScrollView, Keyboard, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from '@rneui/themed';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { auth, db } from '../firebase/firebaseConfig';
import { useEffect } from 'react';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [gender, setGender] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userDetails, setUserDetails] = useState({})


  useEffect(() => {
    if (Object.keys(userDetails).length > 0) {
      const addUserToFirestore = async () => {
        try {
          const docRef = await addDoc(collection(db, 'users'), userDetails);
          console.log('Document written with ID: ', docRef.id);
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      };

      addUserToFirestore();
    }
  }, [userDetails]); // Trigger useEffect whenever userDetails changes

  const onSubmit = async () => {

    var userPassword = ''

    if(!email && !password && !confirmPassword)  {
      return
    }
    if(password == confirmPassword) {
      userPassword = password
      console.log(userPassword)
    } else return

    // create user with email and password using firebase SDK
    // auth is imported from firebase config file
    createUserWithEmailAndPassword(auth, email, userPassword )
      .then (async (userCredential) => {
        // Signed up 
        setIsLoading(!isLoading)
        const user = userCredential.user;
        const uid = user.uid
        const data = {
          id: uid,
          email,
          phoneNumber,
          fullName,
          occupation,
          gender
        }
        
        await setUserDetails(data)        
      })
      .catch((error) => {
        setIsLoading(!isLoading)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage + errorCode)
      });
    setIsLoading(!isLoading)
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
            placeholder= 'Gender'
            containerStyle={{
              height: 40,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'white',
              borderRadius: 10
            }}
            onChangeText={value => setGender(value)}
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
            placeholder= 'Phone Number'
            containerStyle={{
              height: 40,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'white',
              borderRadius: 10
            }}
            onChangeText={value => setPhoneNumber(value)}
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