import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { acolors } from '../constants/colors'

export default IconBtn = ({ onPress, children, icon, iconStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.Btn]}
            onPress={() => onPress()}
        >
            <Image source={icon} style={iconStyle ?? styles.icon} />
            <Text style={styles.topsBtnTitle}>{children ?? 'Click Me'}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    Btn: {
        width: '100%',
        height: 48,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.43)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 13
    },
    icon: {
        width: 20,
        height: 20
    },
    topsBtnTitle: {
        color: 'white',
        fontFamily: 'Gilroy-Regular',
        fontSize: 15,
    },

})

