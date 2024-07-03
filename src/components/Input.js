import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Input({
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
    containerStyle
}) {

    return (
        <View style={[styles.container, { ...containerStyle }]}>
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
                    height: multiline ? 'auto' : 50,
                    fontSize: 14,
                    color: '#000',
                    flex: 1,
                    ...style,
                }}
            />
            {icon ? <TouchableOpacity>
                <Image
                    source={icon}
                    style={styles.img}
                />
            </TouchableOpacity> : null}

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: '#D6D6D6',
        backgroundColor: '#F3f3f3',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    img: {
        width: 12,
        height: 8,
        resizeMode: 'contain'
    }
})