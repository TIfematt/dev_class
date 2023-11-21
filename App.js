import { useState } from 'react'
import { 
  View, 
  Text, 
  Button, 
  Image,
  TouchableOpacity 
} from 'react-native'
import nitda from './assets/nitda.png'

const App = () => {

  const [isShow, setIsShow] = useState('')

  return (
    <View style={{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity
        onPress={() => setIsShow('I just pressed an image')}
      >
        <Image 
          source={nitda}
          style={{
            height: 100
          }}
        />
      </TouchableOpacity>

      <Text style={{
        color: 'white',
        fontSize: 40
        }}
      >
        Hello, Nitda
      </Text>
      <Button 
        title='Change Name'
        onPress={() => setIsShow('I just pressed a button')}
      />

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
  )
}

export default App