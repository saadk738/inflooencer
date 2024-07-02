import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash({ navigation }) {
    const next = () => {
        setTimeout(() => {
            navigation.navigate('Onboard1')
        }, 3000)
    }

    useEffect(() => {
        next()

    }, [])
    return (
        <SafeAreaView>
            <StatusBar
                hidden={true}
            />
            <View>
                <Image
                    source={require('../assets/imgs/splash.png')}
                    style={styles.bgImg}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgImg: {
        width: '100%',
        height: '100%',
    }
})