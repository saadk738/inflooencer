import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'

export default function Onboard1({ navigation }) {
    const next = () => {
        navigation.navigate('Onboard2')
    }
    return (
        <SafeAreaView>
            <StatusBar
                hidden={true}
            />
            <ImageBackground
                source={require('../assets/imgs/onBoardBg1.png')}
                style={styles.bgImg}
            >
                <View style={[globalStyles.container, styles.contentContainer]}>

                    <Image
                        source={require('../assets/imgs/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.heading} >
                        Welcome to Inflooencer
                    </Text>
                    <Text style={styles.text}>
                        Finding the most engaging events & things to do
                    </Text>
                    <Btn
                        onPress={next}
                    >Next</Btn>
                    <View style={styles.bottomTextBox}>
                        <Text style={styles.subText}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.subTextClickable}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgImg: {
        width: '100%',
        height: '100%',
        gap: 10,
    },
    contentContainer: {
        gap: 18,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logo: {
        width: 35,
        height: 65,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 30,
        fontFamily: 'Gilroy-Black',
        color: 'white'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Gilroy-Regular',
        color: 'white',
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center',
        lineHeight: 22
    },
    bottomTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    subText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Gilroy-Regular',
    },
    subTextClickable: {
        fontSize: 14,
        fontFamily: 'Gilroy-Black',
        color: acolors.primary,
    }

})