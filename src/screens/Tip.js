import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import Input from '../components/Input'
import SlideToConfirm from '../components/SlideToConfirm'

const screenWidth = Dimensions.get('screen').width - 40;

const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];


export default function Tip({ navigation }) {
    let [val, setVal] = useState('Hi, Sabine. Hope you are doing fine')
    let [points, setPoints] = useState("250")

    const handleBtn = (val) => {
        const newVal = points + val;
        setPoints(newVal)
    }

    const handleBack = () => {
        const newVal = points.slice(0, -1)
        setPoints(newVal)
    }
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.bgContainer} >
                <View>
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
                    />

                    <Text style={styles.amountLabel} >Enter Amount</Text>

                    <View style={styles.amountBox}>
                        <Text style={styles.input}>{points}</Text>
                        <Text style={styles.points}>Pts</Text>
                    </View>

                    {/* Custom keyboard  */}
                    <View style={styles.btnsBox} >
                        {
                            btns.map(val => (
                                <TouchableOpacity
                                    key={val}
                                    style={styles.btn}
                                    onPress={() => handleBtn(val)}
                                >
                                    <Text style={styles.btnText} >{val}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={handleBack}
                        >
                            <Image
                                source={require('../assets/imgs/back.png')}
                                style={styles.back}
                            />
                        </TouchableOpacity>
                    </View>



                    <View style={styles.bottom} >
                        <SlideToConfirm
                            onConfirm={() => console.log('confirmed 1')}
                        />
                    </View>

                    <View style={{ height: 50 }} />

                </View>





            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

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
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 10,
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
        fontSize: 28,
        color: '#AAAAAA',
        marginLeft: 10,
    },
    bottom: {
        marginTop: 30
    },
    btnsBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    btn: {
        width: screenWidth / 3,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        alignSelf: 'center',
        fontFamily: 'Gilroy-Medium',
        fontSize: 27,
        color: acolors.black
    },
    back: {
        width: 25,
        height: 15,
        marginTop: 5,
    }



})