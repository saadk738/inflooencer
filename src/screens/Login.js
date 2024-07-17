import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import Input from '../components/Input'
import { acolors } from '../constants/colors'

export default function Login({ navigation }) {
    [secure, setSecure] = useState(true);
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.bgContainer} >
                <Image
                    source={require('../assets/imgs/logoDarkBg.png')}
                    style={styles.logoImg}
                />

                <Text style={globalStyles.subHeading1}>
                    Hello there,
                </Text>
                <Text style={globalStyles.heading1} >
                    Welcome Peeps!
                </Text>

                {/* Input Fields  */}
                <Input
                    placeHolder='Email Address'
                />
                <Input
                    placeHolder='Password'
                    secure={secure}
                    onSecure={() => setSecure(!secure)}
                    icon={require('../assets/imgs/visibility.png')}

                />

                {/* Forget Password */}
                <TouchableOpacity>
                    <Text style={styles.text} >
                        Forgot Password?
                    </Text>
                </TouchableOpacity>


                <Btn
                    onPress={() => navigation.navigate('MyDrawer')}
                    style={{ marginVertical: 30 }}
                >Next</Btn>

                <View style={styles.line}>
                </View>
                <Text style={styles.lineText} >Or Continue With</Text>

                <View style={styles.socialBox} >
                    <TouchableOpacity style={styles.socialImgBox} >
                        <Image
                            source={require('../assets/imgs/googleGroup.png')}
                            style={styles.socialImg}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialImgBox}>
                        <Image
                            source={require('../assets/imgs/facebookGroup.png')}
                            style={styles.socialImg}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialImgBox} >
                        <Image
                            source={require('../assets/imgs/appleGroup.png')}
                            style={styles.socialImg}
                        />
                    </TouchableOpacity>
                </View>



                {/* bottom text  */}
                <View style={styles.bottomTextBox}>
                    <Text style={styles.subText}>
                        Not a member?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpStep1')}
                    >
                        <Text style={styles.subTextClickable}>Sign up now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    logoImg: {
        width: 80,
        height: 80,
        marginVertical: 30,
        alignSelf: 'center'
    },
    text: {
        fontSize: 10,
        alignSelf: 'flex-end',
        fontFamily: 'Gilroy-Regular',
        marginBottom: 10,
        color: acolors.black,
    },
    line: {
        height: 3,
        backgroundColor: '#9DA1A1',
        marginHorizontal: 30,
        marginTop: 10,
    },
    lineText: {
        fontSize: 14,
        color: 'black',
        marginTop: -12,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        alignSelf: 'center',
        fontFamily: 'Gilroy-Black',
    },
    socialBox: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    socialImgBox: {
        width: '26%',
    },
    socialImg: {
        width: '100%',
        resizeMode: 'contain'
    },
    bottomTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        gap: 10
    },
    subText: {
        fontSize: 14,
        color: '#929292',
        fontFamily: 'Gilroy-Regular',
    },
    subTextClickable: {
        fontSize: 14,
        fontFamily: 'Gilroy-Black',
        color: acolors.primary,
    },
})