// CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { acolors } from '../constants/colors';

const CustomDrawerContent = ({ navigation, ...props }) => {
    const pages = [
        {
            name: 'My Account',
            icon: require('../assets/imgs/accountLight.png'),
            iconWidth: 24,
            iconHeight: 24,
            to: 'MyTabs',
        },
        {
            name: 'Payment',
            icon: require('../assets/imgs/walletLight.png'),
            iconWidth: 24,
            iconHeight: 24,
            to: 'MyTabs',
        },
        {
            name: 'Privacy Policy',
            icon: require('../assets/imgs/msgLight.png'),
            iconWidth: 24,
            iconHeight: 24,
            to: 'MyTabs',
        },
        {
            name: 'Terms & Conditions',
            icon: require('../assets/imgs/clipboardLight.png'),
            iconWidth: 25,
            iconHeight: 25,
            to: 'MyTabs',
        },
        {
            name: 'Settings',
            icon: require('../assets/imgs/settingLight.png'),
            iconWidth: 22,
            iconHeight: 22,
            to: 'Setting',
        },
    ]
    return (
        // <DrawerContentScrollView >
        <View style={styles.main}>
            <View style={styles.upper}>
                <View style={styles.profile}>
                    <TouchableOpacity
                        style={styles.cross}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image source={require('../assets/imgs/crossPrimary.png')}
                            style={styles.crossImg}
                        />
                    </TouchableOpacity>
                    <View style={styles.profileLeft} >
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&s' }}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.profileRight} >
                        <Text style={styles.name} >John Doe</Text>
                        <Text style={styles.email}>johndoe@dummy.com</Text>
                    </View>
                </View>
                {
                    pages.map(e => (
                        <View
                            key={e?.name}
                            style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Image source={e?.icon}
                                    style={{
                                        width: e?.iconWidth,
                                        height: e?.iconHeight,
                                    }}
                                />
                            </View>
                            <View style={styles.itemRight}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(e?.to)}
                                >
                                    <Text style={styles.itemTxt} >{e?.name}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))
                }
                <View style={styles.space}>
                    <View style={styles.spaceLeft}>

                    </View>
                </View>
            </View>


            <View
                style={styles.item}
            >
                <View style={[styles.itemLeft, { paddingVertical: 30, }]}>
                    <Image source={require('../assets/imgs/logout.png')}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </View>
                <View style={styles.itemRight}>
                    <TouchableOpacity>
                        <Text style={styles.itemTxt} >Logout</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        // </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
    main: {
        justifyContent: 'space-between',
        height: '100%'
    },
    lower: {
        height: 40,
        backgroundColor: 'red',
    },
    upper: {
        flex: 1,
    },
    cross: {
        position: 'absolute',
        right: 15,
        top: 15,
        // right: -14,
        // top: 20,
    },
    crossImg: {
        width: 28,
        height: 28,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileLeft: {
        width: 67,
        backgroundColor: acolors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
    },
    img: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    profileRight: {
        paddingHorizontal: 20,
    },
    name: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 20,
        color: acolors.black
    },
    email: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 12,
        color: acolors.primary,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemLeft: {
        width: 67,
        backgroundColor: acolors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    itemRight: {
        paddingHorizontal: 20
    },
    itemTxt: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        color: acolors.black,
    },
    space: {
        flex: 1,
    },
    spaceLeft: {
        flex: 1,
        width: 67,
        backgroundColor: acolors.primary,
    },


})