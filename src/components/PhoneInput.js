import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

export default function PhoneInput1() {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    // const phoneInput = useRef(null);
    return (
        <>
            <View style={styles.container} >
                <PhoneInput
                    // ref={phoneInput}
                    // defaultValue={value}
                    defaultCode="US"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}

                    // autoFocus
                    textInputStyle={styles.textInputStyle}
                    flagButtonStyle={styles.flagButtonStyle}
                    textContainerStyle={styles.textContainerStyle}
                />
            </View>
        </>
    );
};

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
        width: '100%',
        height: 50,
    },
    img: {
        width: 12,
        height: 8
    },
    flagButtonStyle: {
        backgroundColor: '#F3f3f3',
    },
    textContainerStyle: {
        backgroundColor: '#F3f3f3',
        justifyContent: 'center',
    },
    textInputStyle: {
        color: 'black',
        fontSize: 16,
        zIndex: 22,
    }


})
