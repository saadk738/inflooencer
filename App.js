import React from 'react'
import Splash from './src/screens/Splash'
import Onboard1 from './src/screens/Onboard1'
import Onboard2 from './src/screens/Onboard2'
import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpStep1 from './src/screens/SignUpStep1'
import SignUpStep2 from './src/screens/SignUpStep2'
import SignUpStep3 from './src/screens/SignUpStep3'
import SignUpStep4 from './src/screens/SignUpStep4'
import Notifications from './src/screens/Notifications'
import MessagingSearch from './src/screens/MessagingSearch'
import Messaging from './src/screens/Messaging'
import Home from './src/screens/Home'
import MyTabs from './src/navigation/MyTabs'

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
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="MessagingSearch" component={MessagingSearch} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name='Onboard1' component={Onboard1} />
        <Stack.Screen name='Onboard2' component={Onboard2} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUpStep1' component={SignUpStep1} />
        <Stack.Screen name='SignUpStep2' component={SignUpStep2} />
        <Stack.Screen name='SignUpStep3' component={SignUpStep3} />
        <Stack.Screen name='SignUpStep4' component={SignUpStep4} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}