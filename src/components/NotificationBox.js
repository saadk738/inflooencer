import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { acolors } from '../constants/colors'

export default function NotificationBox({ img, name, content, time }) {
    return (
        <View style={styles.container} >
            <View style={styles.upper}>
                <Image
                    source={img ? img : require('../assets/imgs/p1.png')}
                    style={styles.img}
                />
                <View style={styles.upperRight} >
                    <Text style={styles.heading} >{name ?? "John Doe"}</Text>
                    <Text style={styles.text} >
                        {content ?? "lorem ipsum we shd  hdsgh adhbh ahda adhhba ad lorem ipsum we shd  hdsgh adhbh ahda adhhba adhb"}
                    </Text>
                </View>
            </View>
            <Text style={[styles.text, { alignSelf: 'flex-end' }]}  >
                {time ?? '2:52am'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingLeft: 10,
        paddingRight: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
    upper: {
        flexDirection: 'row',
        gap: 10,
        width: '100%'
    },
    upperRight: {
        flex: 1,
    },
    img: {
        width: 60,
        height: 60,
    },
    heading: {
        fontFamily: "Gilroy-Bold",
        fontSize: 17,
        color: acolors.black,
        marginBottom: 5,
    },
    text: {
        fontFamily: "Gilroy-Regular",
        color: acolors.grey,
        fontSize: 10,
        lineHeight: 13,
    },
    time: {

    }
})