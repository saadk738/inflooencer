import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MsgInput({
    type,
    placeHolder,
    value,
    multiline,
    maxLength,
    style,
    editable,
    secure,
    onChangeText,
    onBlur,
    icon,
    containerStyle,
    iconStyle,
    iconLeft,

}) {

    return (
        <View style={[styles.container, { ...containerStyle }]}>
            <TouchableOpacity >
                <Image
                    source={require('../assets/imgs/emoji.png')}
                    style={styles.iconLeftStyle}
                />
            </TouchableOpacity>
            <TextInput
                editable={editable}
                multiline={multiline}
                value={value}
                maxLength={maxLength}
                secureTextEntry={secure}
                onChangeText={onChangeText}
                onBlur={onBlur}
                keyboardType={type ? type : 'default'}
                placeholder={placeHolder ? placeHolder : ''}
                placeholderTextColor="#a0a0a0"
                style={{
                    fontFamily: 'Gilroy-Regular',
                    height: multiline ? 'auto' : 46,
                    fontSize: 14,
                    color: '#000',
                    flex: 1,
                    ...style,
                }}
            />
            <View style={styles.rightBox} >
                <TouchableOpacity>
                    <Image
                        source={require('../assets/imgs/doc.png')}
                        style={styles.doc}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/imgs/media.png')}
                        style={styles.media}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/imgs/mic.png')}
                        style={styles.mic}
                    />
                </TouchableOpacity>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 1.62,
        elevation: 1,
    },
    iconLeftStyle: {
        width: 18,
        height: 18,
        marginEnd: 5,
    },
    rightBox: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    doc: {
        width: 14,
        height: 16,
    },
    media: {
        width: 16,
        height: 15,
    },
    mic: {
        width: 15,
        height: 20
    }

})