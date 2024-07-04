import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import NotificationBox from '../components/NotificationBox'

export default function Notifications({ navigation }) {
    const notifications1 = [
        {
            img: require('../assets/imgs/p3.png'),
            name: 'Charlie Ghouse',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            time: "12:34pm"
        },
        {
            img: require('../assets/imgs/p1.png'),
            name: 'Rose Merry',
            description: 'Rose has recently added new photos on his profile and tag you.',
            time: "11:04am"
        },
    ]

    const notifications2 = [
        {
            img: require('../assets/imgs/p3.png'),
            name: 'Charlie Ghouse',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            time: "12:34pm"
        },
        {
            img: require('../assets/imgs/p1.png'),
            name: 'Rose Merry',
            description: 'Rose has recently added new photos on his profile and tag you.',
            time: "11:04am"
        },
        {
            img: require('../assets/imgs/p4.png'),
            name: 'John Mesh',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            time: "12:34pm"
        },
        {
            img: require('../assets/imgs/p2.png'),
            name: 'Katty Sham',
            description: 'Rose has recently added new photos on his profile and tag you.',
            time: "11:04am"
        },
        {
            img: require('../assets/imgs/p3.png'),
            name: 'Charlie Ghouse',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            time: "12:34pm"
        },
        {
            img: require('../assets/imgs/p1.png'),
            name: 'Rose Merry',
            description: 'Rose has recently added new photos on his profile and tag you.',
            time: "11:04am"
        },
        {
            img: require('../assets/imgs/p4.png'),
            name: 'John Mesh',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            time: "12:34pm"
        },
        {
            img: require('../assets/imgs/p2.png'),
            name: 'Katty Sham',
            description: 'Rose has recently added new photos on his profile and tag you.',
            time: "11:04am"
        },
    ]
    return (
        <SafeAreaView>
            <ScrollView style={[globalStyles.bgContainer, styles.container]} >
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/imgs/cross.png')}
                            style={globalStyles.backIcon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.heading1} >
                        Notifications
                    </Text>

                    {/* Today's Notications  */}
                    <Text style={styles.heading2}>
                        Today
                    </Text>

                    {
                        notifications1 && notifications1.length > 0 &&
                        notifications1.map((e, i) => (
                            <NotificationBox
                                key={i}
                                img={e?.img}
                                name={e?.name}
                                content={e?.content}
                                time={e?.time}
                            />
                        ))
                    }


                    {/* Older Notications  */}
                    <Text style={[styles.heading2, { marginTop: 15, marginBottom: 25 }]}>
                        Older
                    </Text>

                    {
                        notifications2 && notifications2.length > 0 &&
                        notifications2.map((e, i) => (
                            <NotificationBox
                                key={i}
                                img={e?.img}
                                name={e?.name}
                                content={e?.content}
                                time={e?.time}
                            />
                        ))
                    }
                </View>

                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-between'
        backgroundColor: '#F7F8FA'
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: acolors.black,
        fontSize: 26,
        marginBottom: 15,
    },
    heading2: {
        fontFamily: 'Gilroy-Bold',
        color: acolors.primary,
        fontSize: 16,
        marginBottom: 15,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        marginBottom: 10,
        color: acolors.black,
        lineHeight: 16
    },

})