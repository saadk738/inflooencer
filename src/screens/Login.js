import { View, Text } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'

export default function Login() {
    return (
        <View style={{ padding: 20, }}>
            <Text>Login</Text>
            <Btn
                onPress={() => console.log('pressed')}
            >HELOO</Btn>
        </View>
    )
}