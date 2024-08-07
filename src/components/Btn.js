import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { acolors } from '../constants/colors'

export default Btn = ({ onPress, children, style, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.tipsBtn, { ...style }]}
            onPress={onPress}
        >
            <Text style={[styles.btnTitle, { ...textStyle }]}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    tipsBtn: {
        width: '100%',
        height: 52,
        borderRadius: 10,
        backgroundColor: acolors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
        fontFamily: 'Gilroy-Bold',
        fontSize: 19,
    },

})

