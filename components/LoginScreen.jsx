import { 
  View, 
  Text, 
  Image,
  TouchableOpacity,
} from 'react-native'
import { Input, Button } from '@rneui/themed';
import nitda from '../assets/nitda.png'
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    if(!email && !password) {
      return 
    }
    if (email == 'tife@gmail.com' && password == '123456'){
      navigation.navigate('home')
    }
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
      }}
    >
      <TouchableOpacity>
        <Image 
          source={nitda}
          style={{
            height: 100
          }}
        />
      </TouchableOpacity>
      <View style={{
        marginTop: 20,
        gap: 20
        }}
      >
        <Input 
          placeholder='Enter Email'
          containerStyle={{
            width: 300,
            height: 40,
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: 'white',
            borderRadius: 10
          }}
          onChangeText={value => setEmail(value)}
        />
        <Input  
          placeholder='Password'
          containerStyle={{
            width: 300,
            height: 40,
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: 'white',
            borderRadius: 10
          }}
          onChangeText={value => setPassword(value)}
        />
        <Button 
          title='Login'
          onPress={onSubmit}

        />
      </View>
      
  
    </View> 
  )
}

export default LoginScreen