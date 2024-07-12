import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'

export default function Setting({ navigation }) {
    const data = [
        {
            name: 'Personal Information',
            icon: require('../assets/imgs/account.png'),
            iconWidth: 20,
            iconHeight: 20,
            to: 'PersonalInformation'
        },
        {
            name: 'Password & Security',
            icon: require('../assets/imgs/security.png'),
            iconWidth: 20,
            iconHeight: 20,
            to: 'PasswordSecurity'
        },
        {
            name: 'Privacy Policy',
            icon: require('../assets/imgs/privacy.png'),
            iconWidth: 20,
            iconHeight: 20,
            to: 'Setting'
        },
        {
            name: 'Feedback to App',
            icon: require('../assets/imgs/feedback.png'),
            iconWidth: 22,
            iconHeight: 22,
            to: 'Setting'
        },
        {
            name: 'FAQ',
            icon: require('../assets/imgs/FAQ.png'),
            iconWidth: 23,
            iconHeight: 23,
            to: 'Setting'
        },

        {
            name: 'Help Center',
            icon: require('../assets/imgs/helpCenter.png'),
            iconWidth: 23,
            iconHeight: 23,
            to: 'Setting'
        },
    ]


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

                    <Text style={styles.sectionTitle}>
                        Account Settings
                    </Text>
                    <ScrollView>
                        {
                            data.map(e => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(e?.to)}
                                    style={styles.card} key={e?.name}>
                                    <View style={styles.cardLeft} >
                                        <Image
                                            source={e?.icon}
                                            style={{
                                                width: e?.iconWidth,
                                                height: e?.iconHeight
                                            }} />
                                        <Text style={styles.cardTitle}>{e?.name}</Text>
                                    </View>

                                    <Image
                                        source={require('../assets/imgs/next.png')}
                                        style={styles.cardNextIcon}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    cardLeft: {
        flexDirection: 'row',
        gap: 30,
    },
    cardTitle: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        color: acolors.black,

    },
    cardNextIcon: {
        width: 11,
        height: 11,
    }

})