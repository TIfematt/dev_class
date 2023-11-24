import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import nitda from '../assets/nitda.png'
import { Button, Card, Icon } from '@rneui/themed';
import { ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const studentCard = ({ name, occupation, phoneNumber, gender }) => {
    return (
      <View>
        <Card >
          <Card.Title 
            style={{ fontSize: 24, fontWeight: 'bold'  }}
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
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold'  }}>
           Phone Number: {phoneNumber}
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold'  }}>
            Gender: {gender}
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
      <TouchableOpacity 
        onPress={() => navigation.navigate('login')}
        style={{
          position: 'absolute',
          top: 30,
          left: 0,
          zIndex: 2
        }}
      >
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'green',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center'
          }}
        >
          <View style={{
            width: 30,
            height: 2,
            backgroundColor: 'white'
          }}>
          </View>
        </View>
      </TouchableOpacity>
      <Image 
        source= {nitda}
      />
      <Text style={{
        fontSize: 24,
        marginTop: 12
        }}
      >
        Nitda Training Participants
      </Text>
      <ScrollView>
        {studentCard({
          name: 'William Bale',
          occupation: 'Web App Developer',
          gender: 'male',
          phoneNumber: '08067836721'
        })}
      </ScrollView>
    </View>
  )
}

export default HomeScreen