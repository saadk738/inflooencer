import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import IconBtn from '../components/IconBtn'

export default function Onboard2({ navigation }) {
    return (
        <SafeAreaView>
            <StatusBar
                hidden={true}
            />
            <ImageBackground
                source={require('../assets/imgs/onBoardBg2.png')}
                style={styles.bgImg}
            >
                <View style={[globalStyles.container, styles.contentContainer]}>

                    <Image
                        source={require('../assets/imgs/logo.png')}
                        style={styles.logo}
                    />
                    <View style={styles.lowerBox}>
                        <Text style={styles.heading} >
                            Capture Moments,
                            Share Memories,
                            Earn Rewards
                        </Text>

                        <IconBtn
                            icon={require('../assets/imgs/apple.png')}
                            onPress={() => { }}
                            iconStyle={{
                                width: 19,
                                height: 23,
                            }}
                        >
                            Continue with Apple
                        </IconBtn>
                        <IconBtn
                            icon={require('../assets/imgs/google.png')}
                            onPress={() => { console.log('clicked') }}
                        >
                            Continue with Google
                        </IconBtn>
                        <IconBtn
                            icon={require('../assets/imgs/facebook.png')}
                            onPress={() => { }}
                        >
                            Continue with Facebook
                        </IconBtn>
                        <IconBtn
                            icon={require('../assets/imgs/instagram.png')}
                            onPress={() => { }}
                        >
                            Continue with Instagram
                        </IconBtn>

                        {/* bottom text  */}
                        <View style={styles.bottomTextBox}>
                            <Text style={styles.subText}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={styles.subTextClickable}>Login</Text>
                            </TouchableOpacity>
                        </View>

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
        justifyContent: 'space-between',
    },
    logo: {
        width: 45,
        height: 85,
        alignSelf: 'center',
        marginTop: 50,
    },
    lowerBox: {
        width: '100%',
        gap: 10,
        alignItems: 'center',
    },
    heading: {
        fontSize: 39,
        fontFamily: 'Gilroy-Black',
        color: 'white',
        textAlign: 'center',
        lineHeight: 50,
        marginBottom: 25,
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