import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import Input from '../components/Input'
import SlideToConfirm from '../components/SlideToConfirm'


export default function Tip1({ navigation }) {
    let [val, setVal] = useState('Hi, Sabine. Hope you are doing fine')
    let [points, setPoints] = useState("250")
    return (
        <SafeAreaView>
            <View style={[globalStyles.bgContainer, styles.container]} >
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/imgs/backIcon2.png')}
                            style={globalStyles.backIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.heading}>
                        Send Tip
                    </Text>
                    {/* profile  */}
                    <View style={styles.profile}>
                        <View style={styles.profileLeft}>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s' }}
                                style={styles.profileImg}
                            />
                            <View>
                                <Text style={styles.name}>Sabine Callas</Text>
                                <View style={styles.idBox}>
                                    <Text style={styles.id} >Red id:</Text>
                                    <Text style={styles.idVal}>01923-029231</Text>
                                </View>
                            </View>
                        </View>
                        <Image
                            source={require('../assets/imgs/down.png')}
                            style={styles.downIcon}
                        />
                    </View>

                    <View style={styles.inputLabelBox}>
                        <Text style={styles.inputLabel}>Message (optional)</Text>
                        <Text style={styles.inputLength} >{val.length}/150</Text>
                    </View>
                    <Input
                        value={val}
                        multiline
                        onChangeText={(e) => setVal(e)}
                        style={{ minHeight: 100 }}
                    />

                    <Text style={styles.amountLabel} >Enter Amount</Text>

                    <View style={styles.amountBox}>
                        <TextInput
                            keyboardType='numeric'
                            value={points}
                            autoFocus
                            style={styles.input}
                            onChangeText={(e) => setPoints(e)}
                        />
                        <Text style={styles.points}>Pts</Text>
                    </View>




                </ScrollView>


                <View style={styles.bottom}>
                    <SlideToConfirm
                        onConfirm={() => console.log('confirmed 1')}
                    />

                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    heading: {
        fontFamily: "Gilroy-Bold",
        fontSize: 28,
        color: acolors.black,
        marginBottom: 20,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D6D6D6',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
    },
    profileLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    name: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 15,
        color: acolors.black,
        marginBottom: 1,
    },
    idBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    id: {
        fontFamily: 'Gilroy-Light',
        fontSize: 11,
        color: '#263238'
    },
    idVal: {
        fontFamily: 'Gilroy-Light',
        fontSize: 11,
        color: "#979797"
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    downIcon: {
        width: 9,
        height: 5,
    },
    inputLabelBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        paddingHorizontal: 3,
    },
    inputLabel: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 14,
        color: acolors.black
    },
    inputLength: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 11,
        color: '#A5A5A5'
    },
    amountLabel: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 12,
        color: '#A8A8A8',
        marginTop: 20,
        textAlign: 'center'
    },
    amountBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 28,
        color: acolors.black
    },
    points: {
        fontFamily: "Gilroy-Bold",
        fontSize: 26,
        color: '#AAAAAA'
    },
    bottom: {
        marginBottom: 30
    }



})