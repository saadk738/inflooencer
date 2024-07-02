import { View, Text } from 'react-native'
import React from 'react'
import Splash from './src/screens/Splash'
import Onboard1 from './src/screens/Onboard1'
import Onboard2 from './src/screens/Onboard2'
import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name='Onboard1' component={Onboard1} />
        <Stack.Screen name='Onboard2' component={Onboard2} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}