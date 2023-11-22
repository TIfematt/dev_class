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

const LoginScreen = ({ navigation }) => {

  const [isShow, setIsShow] = useState('')

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
            />
            <Button 
              title= 'Login'
              
              onPress={() => navigation.navigate('home')}
            />
          </View>
          {isShow && (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                marginTop: 12
              }}
            >
              {isShow}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  )
}

export default LoginScreen