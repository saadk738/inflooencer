import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { acolors } from '../constants/colors'


const chatData = [
    {
        _id: "60d21b4677d67e0015e0b01e",
        sender: "Daniel Cavil",
        receiver: "Cavil Nice",
        message: "Hey Cavil, how are you?",
        timestamp: "2024-07-04T10:00:00Z"
    },
    {
        _id: "60d21b4677d67e0015e0b01f",
        sender: "Cavil Nice",
        receiver: "Daniel Cavil",
        message: "Hi Daniel! I'm good, thanks. How about you?",
        timestamp: "2024-07-04T10:02:00Z"
    },
    {
        _id: "60d21b4677d67e0015e0b020",
        sender: "Daniel Cavil",
        receiver: "Cavil Nice",
        message: "I'm doing well. Just working on a new project. What about you?",
        timestamp: "2024-07-04T10:03:00Z"
    },
    {
        _id: "60d21b4677d67e0015e0b021",
        sender: "Cavil Nice",
        receiver: "Daniel Cavil",
        message: "Same here. Busy with some deadlines.",
        timestamp: "2024-07-04T10:05:00Z"
    },
    {
        _id: "60d21b4677d67e0015e0b022",
        sender: "Daniel Cavil",
        receiver: "Cavil Nice",
        message: "Good luck with that! If you need any help, just let me know.",
        timestamp: "2024-07-04T10:06:00Z"
    },
    {
        _id: "60d21b4677d67e0015e0b023",
        sender: "Cavil Nice",
        receiver: "Daniel Cavil",
        message: "Thanks, Daniel! I appreciate it.",
        timestamp: "2024-07-04T10:07:00Z"
    }
];

const ChatMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'Daniel Cavil' ? styles.rightMessage : styles.leftMessage]}>
        <Text style={styles.messageText}>{item.message}</Text>
    </View>
);


export default function Messaging({ navigation }) {

    return (
        <SafeAreaView>
            <ScrollView style={[styles.bgContainer, styles.container]} >
                <View>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity onPress={() => { }}>
                                <Image
                                    source={require('../assets/imgs/back.png')}
                                    style={styles.backIcon}
                                />
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/imgs/p3.png')}
                                style={styles.img}
                            />
                            <View>
                                <Text style={styles.heading1}>Cavil Nice</Text>
                                <View style={styles.activeBox} >
                                    <Text style={styles.text} >Active Now</Text>
                                    <View style={styles.circle} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.headerRight}>
                            <TouchableOpacity onPress={() => { }}>
                                <Image
                                    source={require('../assets/imgs/audioCall.png')}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <Image
                                    source={require('../assets/imgs/videoCall.png')}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.body} >
                        <Text style={styles.heading2} >
                            Today
                        </Text>
                        <FlatList
                            data={chatData}
                            renderItem={ChatMessage}
                            keyExtractor={item => item._id}
                            contentContainerStyle={styles.chatContainer}
                        />
                    </View>

                </View>

                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#F7F8FA',
        width: '100%',
        minHeight: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    img: {
        width: 60,
        height: 60,
    },
    activeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    headerRight: {
        flexDirection: 'row',
        gap: 10,
    },
    icon: {
        width: 37,
        height: 37,
        marginTop: -5
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: acolors.black,
        fontSize: 22,
        marginTop: -5
    },
    micIcon: {
        width: 16,
        height: 20,
    },
    heading2: {
        fontFamily: 'Gilroy-Bold',
        color: 'white',
        fontSize: 15,
        marginBottom: 20,
        backgroundColor: acolors.primary,
        alignSelf: 'center',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        color: acolors.black,
        lineHeight: 16
    },
    body: {
        padding: 20,
    },
    chatContainer: {
        padding: 10
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        maxWidth: '70%'
    },
    leftMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e1f5fe'
    },
    rightMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#c8e6c9'
    },
    messageText: {
        fontSize: 16
    }

})





