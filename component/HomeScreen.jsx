import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import nitda from '../assets/nitda.png'
import { Button, Card, Icon } from '@rneui/themed';
import { ScrollView } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, query, where, getDocs, getDoc, doc, collectionGroup } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useEffect } from 'react';

const HomeScreen = ({ navigation }) => {

  const [userDetails, setUserDetails] = useState({})  

  const auth = getAuth();
  const firestore = getFirestore();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        uid = user.uid;
        try {
          const q = query(collectionGroup(db, 'users'), where('id', '==', uid));
          const querySnapshot = await getDocs(q);
      
          if (!querySnapshot.empty) {
            // Assuming there's only one document with the given UID
            const userDoc = querySnapshot.docs[0];
            const userObj = userDoc.data();
            setUserDetails(userObj)
            console.log(userDetails)
            // console.log(userData.firstName)
          } else {
            console.error('User document not found in Firestore');
            // return null;
          }
        } catch (error) {
          console.error('Error fetching user document from Firestore:', error);
          // return null;
        }
      } else {
        console.log('New user')
      }
    });
  }, [])

 


  const studentCard = ({ name, occupation, phoneNumber, gender }) => {
    return (
      <View>
        <Card >
          <Card.Title 
            style={{ fontSize: 24, fontWeight: 'bold'  }}
          >
            {userDetails.fullName}
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
            Occupation: {userDetails.occupation}
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold'  }}>
           Phone Number: {userDetails.phoneNumber}
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold'  }}>
            Gender: {userDetails.gender}
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