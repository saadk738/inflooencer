import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Input from '../components/Input';
import { acolors } from '../constants/colors';
import chatData from '../json/chatData.json'
import MsgInput from '../components/MsgInput';



const ChatMessage = ({ item }) => {
    return (
        // if sender is user itself 
        item.sender === 'Daniel Cavil' ? (
            <View style={[styles.messageContainer, styles.rightMessage]}>
                <Text style={styles.messageTextRight}>{item.message}</Text>
            </View>
        ) : (
            <View style={styles.leftMessageMainBox}>
                <Image
                    source={require('../assets/imgs/p3.png')}
                    style={styles.msgImg}
                />
                <View style={[styles.messageContainer, styles.leftMessage]}>
                    <Text style={styles.messageTextLeft}>{item.message}</Text>
                </View>
            </View>

        )
    );
};


export default function Messaging({ navigation }) {

    return (
        <SafeAreaView style={styles.bgContainer}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <ScrollView style={styles.body} contentContainerStyle={styles.chatContainer}>
                <Text style={styles.heading2}>Today</Text>
                {chatData.map((item) => (
                    <ChatMessage key={item._id} item={item} />
                ))}

                {/* <View style={styles.audioMessageContainer}>
                    <View style={styles.audioMessage}>
                        <Image
                            source={require('../assets/imgs/audioWave.png')}
                            style={styles.audioWave}
                        />
                        <TouchableOpacity style={styles.playButton}>
                            <Image
                                source={require('../assets/imgs/playButton.png')}
                                style={styles.playIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View> */}

            </ScrollView>

            <View style={styles.messageInputContainer}>
                <MsgInput
                    placeHolder='Type Here'
                />

            </View>
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
        padding: 20,
        paddingVertical: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    activeBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
        marginLeft: 5,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    icon: {
        width: 37,
        height: 37,
        marginLeft: 10,
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: '#000',
        fontSize: 22,
    },
    heading2: {
        fontFamily: 'Gilroy-Bold',
        color: 'white',
        fontSize: 15,
        marginBottom: 20,
        backgroundColor: '#6200EE',
        alignSelf: 'center',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        color: '#000',
    },
    body: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
    },
    chatContainer: {
        paddingVertical: 10,
    },
    leftMessageMainBox: {
        flexDirection: 'row',
    },
    msgImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 5,
    },
    messageContainer: {
        padding: 10,
        marginBottom: 20,
        maxWidth: '70%',
    },
    leftMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        paddingHorizontal: 30,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    rightMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#6200EE',
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 0,
    },
    messageTextLeft: {
        fontSize: 16,
        color: acolors.black,
        fontFamily: 'Gilroy-Regular'
    },
    messageTextRight: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'Gilroy-Regular'
    },
    audioMessageContainer: {
        alignSelf: 'flex-end',
        marginVertical: 5,
    },
    audioMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6200EE',
        borderRadius: 20,
        padding: 10,
    },
    audioWave: {
        width: 150,
        height: 40,
        marginRight: 10,
    },
    playButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playIcon: {
        width: 20,
        height: 20,
    },
    messageInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F7F8FA',

    },
    messageInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#EDEDED',
        borderRadius: 20,
        paddingHorizontal: 15,
    },
    sendIcon: {
        width: 24,
        height: 24,
        marginLeft: 10,
    }
});
