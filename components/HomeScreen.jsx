import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import back from '../assets/back.png'
import nitda from '../assets/nitda.png'
import { Button, Card, Icon } from '@rneui/themed';

const HomeScreen = ({navigation}) => {
  const studentCard = ({name, occupation, phoneNumber}) => {
    return (
      <View>
        <Card containerStyle={{
            width: 300
          }}
        >
          <Card.Title style={{
              fontSize: 24, 
              fontWeight: 'bold'
            }}
          >
            {name}
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>
            Occupation: {occupation}
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Phone Number: {phoneNumber}
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    )
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
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
      {/* logo / header */}
      <View>
        <Image 
          source={nitda}
          style={{
            // aspectRatio: '1',
          }}
        />
      </View>
      <Text style={{
          fontSize: 24
        }}
      >
        Details of All Nitda Students
      </Text>
      <View>
        {studentCard({
          name: 'Rebecca Dike',
          occupation: 'Student',
          phoneNumber: '09066357807'
        })}
      </View>
    </View>
  )
}

export default HomeScreen