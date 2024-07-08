import { StyleSheet } from 'react-native';
import { acolors } from '../constants/colors';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'transparent',
    },
    bgContainer: {
        backgroundColor: 'white',
        width: '100%',
        minHeight: '100%',
        padding: 20,
    },
    backIcon: {
        width: 40,
        height: 40,
        marginBottom: 20,
    },
    heading1: {
        fontFamily: 'Gilroy-Black',
        color: acolors.primary,
        fontSize: 26,
        marginBottom: 20,
    },
    subHeading1: {
        fontFamily: 'Gilroy-Black',
        fontSize: 14,
        color: acolors.black,
    },

    bBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default globalStyles;
