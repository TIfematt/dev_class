import { useState } from 'react'
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import { Input, Button } from '@rneui/themed';
import nitda from '../assets/nitda.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    if(!email && !password) return
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then( async (userCredential) => {
      // Signed in 
      const user = userCredential.user;

      // setUser(user)
      navigation.navigate('home') // , {user}
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }

  return (
    <KeyboardAvoidingView style={{
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TouchableOpacity
            onPress={() => setIsShow('')}
          >
            <Image 
              source={nitda}
              style={{
                height: 100
              }}
            />
          </TouchableOpacity>
          <View style={{
            marginTop: 12
            }}
          >
            <Input 
              placeholder='Enter Email Address'
              inputContainerStyle={{
                // width: 200,
                borderWidth: 2,
                borderColor: 'white',
                marginTop: 12,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 10,
                paddingLeft: 12,
              }}
              onChangeText={value => setEmail(value)}
            />
            <Input 
              placeholder='Password'
              inputContainerStyle={{
                // width: 200,
                borderWidth: 2,
                borderColor: 'white',
                marginTop: -12,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 10,
                paddingLeft: 12,
              }}
              onChangeText={value => setPassword(value)}
            />
            <Button 
              title= 'Login'
              onPress={onSubmit}
            />
          </View>
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  )
}

export default LoginScreen