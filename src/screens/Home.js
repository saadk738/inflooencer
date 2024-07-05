import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { acolors } from '../constants/colors';

const users = [
    { id: '1', name: 'Your Story', image: require('../assets/imgs/p1.png'), live: false },
    { id: '2', name: 'Alex Doe', image: require('../assets/imgs/p2.png'), live: true },
    { id: '3', name: 'Deni Doe', image: require('../assets/imgs/p3.png'), live: false },
    { id: '4', name: 'Ricky Doe', image: require('../assets/imgs/p4.png'), live: false },
    { id: '5', name: 'Olive Doe', image: require('../assets/imgs/p1.png'), live: false },
    { id: '6', name: 'Martin Doe', image: require('../assets/imgs/p2.png'), live: false },
    { id: '7', name: 'Your Story', image: require('../assets/imgs/p1.png'), live: false },
    { id: '8', name: 'Deni Doe', image: require('../assets/imgs/p3.png'), live: false },
    { id: '9', name: 'Ricky Doe', image: require('../assets/imgs/p4.png'), live: false },
];

export default function Home({ navigation }) {

    const renderItem = ({ item }) => (
        <View style={styles.story}>
            <LinearGradient
                colors={item.live ? ['#ff5f6d', '#ffc371'] : ['#fff', '#fff']}
                style={styles.storyBorder}
            >
                <Image source={item.image} style={styles.storyImage} />
            </LinearGradient>
            {item.live && <Text style={styles.liveText}>Live</Text>}
            <Text style={styles.storyText}>{item.name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.bgContainer}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image
                            source={require('../assets/imgs/logoDarkBg.png')}
                            style={styles.img}
                        />
                        <View>
                            <Text style={styles.text}>Welcome</Text>
                            <Text style={styles.heading1}>Daniel Cavil</Text>
                        </View>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                            <Image
                                source={require('../assets/imgs/notificationGroup.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MessagingSearch')}>
                            <Image
                                source={require('../assets/imgs/searchGroup.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Messaging')}>
                            <Image
                                source={require('../assets/imgs/boardGroup.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <FlatList
                    horizontal
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={styles.storiesContainer}
                /> */}

                {/* Main content can go here */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#F7F8FA',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 27,
        height: 27,
        marginRight: 10,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 31,
        height: 31,
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: '#000',
        fontSize: 21,
        lineHeight: 23,
    },
    text: {
        fontSize: 13,
        fontFamily: 'Gilroy-Regular',
        color: acolors.primary,
    },
    storiesContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    story: {
        alignItems: 'center',
        marginRight: 20,
    },
    storyBorder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    storyImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        borderColor: 'red',
        borderWidth: 2,
    },
    storyText: {
        marginTop: 5,
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        color: '#000',
    },
    liveText: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'red',
        color: 'white',
        paddingHorizontal: 5,
        borderRadius: 3,
        fontSize: 12,
        fontFamily: 'Gilroy-Bold',
    },
});
