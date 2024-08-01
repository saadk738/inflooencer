import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { acolors } from '../constants/colors';

const users = [
    { id: '6', name: 'Martin Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&s", live: false },
    { id: '7', name: 'John Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX1ID3qi0xYJ249oZ6pxHjeX2jiLdSu2bXQ&s", live: false },
    { id: '8', name: 'Deni Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s", live: false },
    { id: '9', name: 'Ricky Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s", live: false },
];

const options = [
    {
        label: 'Send',
        img: require('../assets/imgs/send.png')
    },
    {
        label: 'Request',
        img: require('../assets/imgs/request.png')
    },
    {
        label: 'Redeem',
        img: require('../assets/imgs/redeem.png')
    },
    {
        label: 'More',
        img: require('../assets/imgs/more.png')
    },
]

let screenWidth = Dimensions.get('window').width - 40;

let heroImgHeight = (screenWidth / 3) * 2



export default function Wallet({ navigation }) {

    return (
        <SafeAreaView style={styles.bgContainer}>



            {/* body  */}
            <ScrollView style={{ flex: 1, padding: 20, }} >

                {/* Header  */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>

                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s" }}
                            style={styles.img}
                        />
                        <View>
                            <Text style={styles.text}>Hello John</Text>
                            <Text style={styles.heading1}>Welcome Back</Text>
                        </View>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                            <Image
                                source={require('../assets/imgs/notifications1.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* hero Img  */}
                <Image
                    source={require('../assets/imgs/atmCard.png')}
                    style={styles.heroImg}
                />

                {/* options  */}
                <View style={styles.optionsBox} >
                    {options.map(e => (
                        <View key={e?.label}>
                            <TouchableOpacity   >
                                <Image
                                    source={e?.img}
                                    style={styles.optionImg}
                                />
                            </TouchableOpacity>
                            <Text style={styles.optionLabel} >{e?.label}</Text>
                        </View>
                    ))}
                </View>

                {/* options2 */}
                <Text style={styles.heading} >Quick Transactions</Text>
                <View style={styles.optionsBox}>
                    {users.map(item => (
                        <View style={styles.opt} key={item?.id}>
                            <LinearGradient
                                colors={[acolors.primary, acolors.primary]}
                                style={styles.optBorder}
                            >
                                <TouchableOpacity>
                                    <Image source={{ uri: item.image }} style={styles.optImage} />
                                </TouchableOpacity>
                            </LinearGradient>

                            <Text style={styles.optText}>{item.name}</Text>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.opt} >
                        <Image
                            source={require('../assets/imgs/searchPrimary.png')}
                            style={{
                                width: screenWidth / 6,
                                height: screenWidth / 6,
                            }}
                        />
                        <Text style={styles.optText}>Search</Text>

                    </TouchableOpacity>
                </View>

                <Text style={styles.heading} >Recent Transactions</Text>
                {
                    users.map(item => (
                        <View key={item.id} style={styles.transaction} >
                            <View style={styles.transactionLeft} >
                                <View style={styles.imgBox}>
                                    <Image
                                        source={{ uri: item?.image }}
                                        style={styles.transactionImg}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <View style={styles.idBox}>
                                        <Text style={styles.id} >Red id:</Text>
                                        <Text style={styles.idVal}>01923-029231</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.transactionRight}>
                                <Text style={styles.points} >2500 Pts</Text>
                                <Text style={styles.idVal} >August 1, 2024</Text>

                            </View>
                        </View>
                    ))
                }








                <View style={{ height: 50 }} />
            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 15,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 46,
        height: 46,
    },
    heading: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 14,
        color: acolors.black
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: '#000',
        fontSize: 21,
        lineHeight: 27,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        color: acolors.primary,
    },
    heroImg: {
        width: screenWidth,
        height: heroImgHeight,
        resizeMode: 'contain',

    },
    optionsBox: {
        flexDirection: 'row',
        marginVertical: 25,
        justifyContent: 'space-between'
    },
    optionImg: {
        width: screenWidth / 5,
        height: screenWidth / 5,
    },
    optionLabel: {
        alignSelf: 'center',
        fontFamily: "Gilroy-Medium",
        fontSize: 12,
        color: acolors.black,
        marginTop: 8,

    },
    opt: {
        alignItems: 'center',
    },
    optBorder: {
        width: screenWidth / 6,
        height: screenWidth / 6,
        borderRadius: screenWidth / 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optImage: {
        width: screenWidth / 6 - 4,
        height: screenWidth / 6 - 4,
        borderRadius: screenWidth / 12 - 2,
        borderWidth: 2,
        borderColor: 'white',
        borderWidth: 4,
    },

    optText: {
        marginTop: 5,
        fontSize: 10,
        fontFamily: 'Gilroy-Light',
        color: acolors.black,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    transactionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    imgBox: {
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: 'rgba(144,0,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    transactionImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 13,
        color: acolors.black,
        marginBottom: 5,
    },
    idBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    id: {
        fontFamily: 'Gilroy-Light',
        fontSize: 12,
        color: '#263238'
    },
    idVal: {
        fontFamily: 'Gilroy-Light',
        fontSize: 12,
        color: "#979797"
    },
    points: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 17,
        color: acolors.black,
    }


});
