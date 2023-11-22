import { 
  View, 
  Text, 
  Image,
  TouchableOpacity,
} from 'react-native'
import { Input, Button } from '@rneui/themed';

import nitda from '../assets/nitda.png'

const LoginScreen = ({ navigation }) => {
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
        />
        <Button 
          title='Login'
          onPress={() => navigation.navigate('home')}

        />
      </View>
      
  
    </View> 
  )
}

export default LoginScreen