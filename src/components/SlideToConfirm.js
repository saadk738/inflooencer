import React, { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { acolors } from '../constants/colors';

export default function SlideToConfirm({ onConfirm }) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const pan = useRef(new Animated.ValueXY()).current;
    const slideWidth = Dimensions.get('window').width - 40;
    const buttonWidth = 47;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                if (gestureState.dx >= 0 && gestureState.dx <= slideWidth - buttonWidth - 13) {
                    pan.setValue({ x: gestureState.dx, y: 0 });
                }
            },
            onPanResponderRelease: (event, gestureState) => {
                if (gestureState.dx >= slideWidth - buttonWidth) {
                    setIsConfirmed(true);
                    onConfirm();
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false
                    }).start();
                }
            }
        })
    ).current;

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Text style={styles.sliderText}>Slide to confirm</Text>
                <Animated.View
                    {...panResponder.panHandlers}
                    style={[
                        styles.sliderButton,
                        {
                            transform: [{ translateX: pan.x }],
                        }
                    ]}
                >
                    <Image
                        source={require('../assets/imgs/forward.png')}
                        style={styles.arrow}
                    />
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderContainer: {
        width: '100%',
        height: 60,
        borderRadius: 30,
        backgroundColor: acolors.black,
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    sliderText: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        color: '#A8A8A8',
        fontFamily: "Gilroy-SemiBold",
        fontSize: 12,
    },
    sliderButton: {
        width: 47,
        height: 47,
        borderRadius: 47 / 2,
        backgroundColor: acolors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 18,
        height: 16,
    },
});
