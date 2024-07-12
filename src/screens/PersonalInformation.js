import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import Input from '../components/Input'
import Btn from '../components/Btn'

export default function PersonalInformation({ navigation }) {

    let [dataObj, setDataObj] = useState({
        firstname: 'John',
        lastname: 'Doe',
        dob: '25/05/2002',
        gender: 'Male'
    })

    const handleInput = (label, value) => {
        dataObj[label] = value;
        setDataObj({ ...dataObj });
    }

    return (
        <SafeAreaView>
            <StatusBar
                hidden={true}
            />
            <ImageBackground
                source={require('../assets/imgs/settingBg.png')}
                style={styles.bgImg}
            >
                <View style={styles.header} >
                    <View style={styles.headerTop}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/imgs/backIcon.png')}
                                style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.screenTitle}>
                            Settings
                        </Text>
                        <View />
                    </View>

                    <View style={styles.headerBottom}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s' }}
                            style={styles.profileImg}
                        />
                        <View>
                            <Text style={styles.name} >John Doe</Text>
                            <Text style={styles.email} >johndoe@gmail.com</Text>
                        </View>
                    </View>

                </View>
                <View style={[globalStyles.container, styles.contentContainer]}>


                    <ScrollView>
                        <Text style={styles.sectionTitle}>
                            Personal Information
                        </Text>
                        <Input
                            label='First name'
                            value={dataObj?.firstname}
                            onChangeText={e => handleInput('firstname', e)}
                            style={{ height: 39 }}
                            containerStyle={{ marginBottom: 20, }}
                        />
                        <Input
                            label='Last name'
                            value={dataObj?.lastName}
                            onChangeText={e => handleInput('lastName', e)}
                            style={{ height: 39 }}
                            containerStyle={{ marginBottom: 20, }}
                        />
                        <Input
                            label='Date of Birth'
                            value={dataObj?.dob}
                            onChangeText={e => handleInput('dob', e)}
                            style={{ height: 39 }}
                            containerStyle={{ marginBottom: 20, }}
                        />
                        <Input
                            label='Gender'
                            value={dataObj?.gender}
                            onChangeText={e => handleInput('gender', e)}
                            style={{ height: 39 }}
                            containerStyle={{ marginBottom: 20, }}
                        />
                    </ScrollView>
                    <Btn
                        style={{ height: 43 }}
                        textStyle={styles.btnText}
                    >Save Changes</Btn>
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
    header: {
        padding: 25,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    backIcon: {
        width: 34,
        height: 34,
        borderRadius: 17,
    },
    screenTitle: {
        fontFamily: 'Gilroy-Bold',
        color: 'white',
        fontSize: 26,
    },
    headerBottom: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 20,
    },
    profileImg: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    name: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 25,
        color: 'white',
    },
    email: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        color: 'white',
    },
    contentContainer: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 25,
    },
    sectionTitle: {
        alignSelf: 'center',
        color: acolors.primary,
        fontSize: 16,
        marginBottom: 35,
    },
    btnText: {
        fontFamily: 'Gilroy-Black',
        color: 'white',
        fontSize: 14,
    }


})