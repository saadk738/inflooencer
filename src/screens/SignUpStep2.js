import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import Input from '../components/Input'
import { acolors } from '../constants/colors'
import PhoneInput from '../components/PhoneInput'
import PhoneInput1 from '../components/PhoneInput'

export default function SignUpStep2({ navigation }) {
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
                        placeHolder='Email Address'
                    />
                    <PhoneInput1 />


                </View>


                <View >
                    <Btn onPress={() => navigation.navigate('SignUpStep3')} >Next</Btn>
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
        color: acolors.grey
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