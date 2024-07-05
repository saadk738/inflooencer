import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import Input from '../components/Input'
import { acolors } from '../constants/colors'


export default function SignUpStep4({ navigation }) {

    [secure, setSecure] = useState(true);
    [secure1, setSecure1] = useState(true);

    return (
        <SafeAreaView>
            <View style={[globalStyles.bgContainer, styles.container]} >
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/imgs/backIcon.png')}
                            style={globalStyles.backIcon}
                        />
                    </TouchableOpacity>

                    <Text style={globalStyles.subHeading1}>
                        Please Register
                    </Text>
                    <Text style={globalStyles.heading1} >
                        Account Details
                    </Text>

                    {/* Input Fields  */}
                    <Input
                        secure={secure}
                        onSecure={() => setSecure(!secure)}
                        placeHolder='Password'
                        icon={require('../assets/imgs/visibility.png')}
                    />
                    <Input
                        secure={secure1}
                        onSecure={() => setSecure1(!secure1)}
                        placeHolder='Confirm Password'
                        icon={require('../assets/imgs/visibility1.png')}

                    />

                    <Text style={[styles.text, { marginTop: 10 }]} >To create a strong password</Text>
                    <Text style={[styles.text, { marginLeft: 15 }]}>1.  Use at least 12 characters.</Text>
                    <Text style={[styles.text, { marginLeft: 15 }]} >2.  Mix uppercase and lowercase letters, numbers, and symbols.</Text>



                </View>


                <View >
                    <Btn
                        onPress={() => navigation.navigate('Home')}
                    >Register</Btn>
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
    dobBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        marginBottom: 10,
        color: acolors.black,
        lineHeight: 16
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