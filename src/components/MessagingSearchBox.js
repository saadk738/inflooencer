import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { acolors } from '../constants/colors'

export default function MessagingSearchBox({ img, name, content, time }) {
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
                        {content ?? "Hi, John, Hope You are doing good."}
                    </Text>
                </View>
                <View style={styles.circle} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 10,
        paddingRight: 10,
    },
    upper: {
        flexDirection: 'row',
        gap: 10,
        width: '100%',
        alignItems: 'center',
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
        fontSize: 12,
        lineHeight: 13,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: acolors.primary
    }
})