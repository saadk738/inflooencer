import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import NotificationBox from '../components/NotificationBox'
import Input from '../components/Input'
import MessagingSearchBox from '../components/MessagingSearchBox'

export default function MessagingSearch({ navigation }) {


    const persons = [
        {
            img: require('../assets/imgs/p3.png'),
            name: 'Charlie Ghouse',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            isActive: false,

        },
        {
            img: require('../assets/imgs/p1.png'),
            name: 'Rose Merry',
            description: 'Rose has recently added new photos on his profile and tag you.',
            isActive: false,

        },
        {
            img: require('../assets/imgs/p4.png'),
            name: 'John Mesh',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            isActive: false,

        },
        {
            img: require('../assets/imgs/p2.png'),
            name: 'Katty Sham',
            description: 'Rose has recently added new photos on his profile and tag you.',
            isActive: false,

        },
        {
            img: require('../assets/imgs/p3.png'),
            name: 'Charlie Ghouse',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            isActive: false,

        },
        {
            img: require('../assets/imgs/p1.png'),
            name: 'Rose Merry',
            description: 'Rose has recently added new photos on his profile and tag you.',
            isActive: false,

        },
        {
            img: require('../assets/imgs/p4.png'),
            name: 'John Mesh',
            description: 'Charlie has recently added new photos on his profile and tag you.',
            isActive: false,

        },
        {
            img: require('../assets/imgs/p2.png'),
            name: 'Katty Sham',
            description: 'Rose has recently added new photos on his profile and tag you.',
            isActive: false,

        },
    ]

    return (
        <SafeAreaView>
            <ScrollView style={[globalStyles.bgContainer, styles.container]} >
                <View>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    source={require('../assets/imgs/back.png')}
                                    style={styles.backIcon}
                                />
                            </TouchableOpacity>
                            <Text style={styles.heading1}>Daniel Kavil</Text>
                        </View>
                        <TouchableOpacity onPress={() => { }}>
                            <Image
                                source={require('../assets/imgs/edit.png')}
                                style={styles.editIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <Input
                        placeHolder='Search here'
                        iconLeft={require('../assets/imgs/search.png')}
                        icon={require('../assets/imgs/mic.png')}
                        iconStyle={styles.micIcon}
                        containerStyle={{ backgroundColor: 'white' }}

                    />

                    <Text style={styles.heading2} >
                        Messages
                    </Text>




                    {/* Older Notications  */}


                    {
                        persons && persons.length > 0 &&
                        persons.map((e, i) => (
                            <MessagingSearchBox
                                key={i}
                                img={e?.img}
                                name={e?.name}
                                onPress={() => navigation.navigate('Messaging')}
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
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    editIcon: {
        width: 37,
        height: 37,
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: acolors.black,
        fontSize: 26,
    },
    micIcon: {
        width: 16,
        height: 20,
    },
    heading2: {
        fontFamily: 'Gilroy-Bold',
        color: acolors.black,
        fontSize: 15,
        marginBottom: 15,
        marginTop: 15,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        marginBottom: 10,
        color: acolors.black,
        lineHeight: 16
    },

})