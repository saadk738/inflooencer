import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { acolors } from '../constants/colors';
import Btn from '../components/Btn';






export default function Profile({ navigation, route }) {

    const [active, setActive] = useState('Posts')

    const options = ['Posts', 'Reels', 'Tagged'];
    const imgs = [
        { id: '1', source: require('../assets/imgs/extraImg1.png') },
        { id: '2', source: require('../assets/imgs/extraImg2.png') },
        { id: '3', source: require('../assets/imgs/extraImg3.png') },
        { id: '4', source: require('../assets/imgs/extraImg4.png') },
        { id: '5', source: require('../assets/imgs/extraImg5.png') },
        { id: '6', source: require('../assets/imgs/extraImg6.png') },
        { id: '7', source: require('../assets/imgs/extraImg7.png') },
        { id: '8', source: require('../assets/imgs/extraImg8.png') },
        { id: '9', source: require('../assets/imgs/extraImg1.png') },
        { id: '10', source: require('../assets/imgs/extraImg2.png') },
        { id: '11', source: require('../assets/imgs/extraImg3.png') },
        { id: '12', source: require('../assets/imgs/extraImg4.png') },
        { id: '13', source: require('../assets/imgs/extraImg5.png') },
        { id: '14', source: require('../assets/imgs/extraImg6.png') },
        { id: '15', source: require('../assets/imgs/extraImg7.png') },
        { id: '16', source: require('../assets/imgs/extraImg8.png') },
    ];

    const numColumns = 3;
    const screenWidth = Dimensions.get('window').width - 40;
    const imageWidth = screenWidth / numColumns;



    const renderItem = ({ item }) => (
        <View style={styles.imageContainer} >
            <Image source={item.source} style={{
                width: imageWidth - 2,
                height: imageWidth,
                borderRadius: 6,
            }} />
        </View>
    );




    return (
        <SafeAreaView style={styles.bgContainer}>
            <ScrollView >

                <View style={styles.header}>
                    <View style={styles.headerUpper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/imgs/back.png')}
                                style={styles.backIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.name}>Daniel_Cavil98</Text>
                        <View />

                    </View>

                    {/* profileImage and stats  */}
                    <View style={styles.statsBox}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s' }}
                            style={styles.profileImg}
                        />
                        <View>
                            <Text style={styles.statsNumber} >15</Text>
                            <Text style={styles.statsHeading}>Post</Text>
                        </View>
                        <View>
                            <Text style={styles.statsNumber} >250</Text>
                            <Text style={styles.statsHeading}>Followers</Text>
                        </View>
                        <View>
                            <Text style={styles.statsNumber} >350</Text>
                            <Text style={styles.statsHeading}>Following</Text>
                        </View>
                    </View>

                    {/* bio  */}
                    <Text style={styles.heading1} >Daniel Cavil</Text>
                    <Text style={[styles.text, { marginBottom: 25, }]} >Passionate tech enthusiast and avid traveler. Exploring the intersection of technology and creativity. Always eager to learn, innovate, and connect with like-minded individuals. Let's create something amazing together!</Text>

                    {/* control btn  */}

                    <Btn
                        style={styles.btn1}
                        textStyle={styles.btn1Text}
                    >Edit Profile</Btn>


                </View>
                {/* Body  */}
                <View style={styles.body}>
                    <View style={styles.tabsBox}>
                        {options.map(tab => <TouchableOpacity
                            key={tab}
                            onPress={() => setActive(tab)}
                            style={[styles.tab,
                            { backgroundColor: active === tab ? 'rgba(180,0,243,0.18)' : 'white' }
                            ]}
                        >
                            <Text style={[styles.tabText,
                            { color: active === tab ? acolors.black : acolors.grey }
                            ]} >{tab}</Text>
                        </TouchableOpacity>

                        )}

                    </View>
                    <FlatList
                        data={imgs}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={numColumns}
                    />

                </View>
            </ScrollView>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#F7F8FA',
        flex: 1,
    },
    header: {
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 30,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,

    },
    headerUpper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    backIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    name: {
        fontFamily: 'Gilroy-Regular',
        color: acolors.black,
        fontSize: 16,
    },
    statsBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingRight: 10,
    },
    profileImg: {
        width: 85,
        height: 92,
        borderRadius: 16,
    },
    statsNumber: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 21,
        color: acolors.primary,
        marginBottom: 5,
        alignSelf: 'center'
    },
    statsHeading: {
        fontFamily: 'Gilroy-Regular',
        color: acolors.grey,
        alignSelf: 'center',
        fontSize: 14,
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: acolors.black,
        fontSize: 18,
        marginTop: 15,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        color: acolors.grey,
        lineHeight: 15,
        marginTop: 10,
    },
    btnsBox: {
        flexDirection: 'row',
        width: '100%',
        gap: 25,
    },
    btn1: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: acolors.primary,
        borderRadius: 7,
        height: 35,
        flex: 1,
    },
    btn1Text: {
        color: acolors.primary,
        fontSize: 15,
        fontFamily: 'Gilroy-Regular',
    },
    btn2: {
        backgroundColor: acolors.primary,
        borderWidth: 1,
        borderColor: acolors.primary,
        borderRadius: 7,
        height: 35,
        flex: 1,

    },
    btn2Text: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Gilroy-Regular'
    },
    body: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
    },
    tabsBox: {
        backgroundColor: 'white',
        padding: 2,
        flexDirection: 'row',
        gap: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    tab: {
        color: acolors.black,
        backgroundColor: 'rgba(180,0,243,0.18)',
        height: 40,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabText: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 15,
        color: acolors.black,
    },
    imageContainer: {
        flex: 1,
        margin: 1,
    },
});
