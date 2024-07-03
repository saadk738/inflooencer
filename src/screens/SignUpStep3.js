import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native'
import React, { useRef } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import Input from '../components/Input'
import { acolors } from '../constants/colors'
import OTPTextView from 'react-native-otp-textinput'


export default function SignUpStep3({ navigation }) {
    let otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

    return (
        <SafeAreaView>
            <View style={[globalStyles.bgContainer, styles.container]} >
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/imgs/backIcon.png')}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>


                    <Text style={[globalStyles.heading1, { textAlign: 'center' }]} >
                        OTP Verification
                    </Text>
                    <Text style={styles.text}>
                        Please enter 6 - digit code, that we have sent on your phone +123 456789
                    </Text>

                    {/* Input Fields  */}
                    <OTPTextView
                        ref={e => (otpInput = e)}
                        inputCount={6}
                        handleCellTextChange={(e) => console.log(e)}
                        tintColor={acolors.primary}
                        offTintColor='#929292'
                    />

                    <Text style={styles.resendStyle}>
                        Resend in 00:48s
                    </Text>


                </View>


                <View >
                    <Btn
                        onPress={() => navigation.navigate('SignUpStep4')}
                    >Next</Btn>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    backIcon: {
        width: 40,
        height: 40,
        marginVertical: 30,
    },
    dobBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        marginBottom: 30,
        color: acolors.black,
        textAlign: 'center',
        lineHeight: 20,
        marginHorizontal: 30
    },
    resendStyle: {
        backgroundColor: '#F4F4F4',
        color: acolors.grey,
        marginVertical: 50,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        fontFamily: 'Gilroy-Black',
        fontSize: 12,
    },
    bottomTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        gap: 10,
        marginTop: 20
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