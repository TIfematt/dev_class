import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import LoginScreen from './component/Login';
import WelcomeScreen from './component/WelcomeScreen';
import HomeScreen from './component/HomeScreen';
import SignUp from './component/SignUp';

export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{
            headerShown: false, // Hide the header for all screens
          }}
        >
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}