import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'

export default function AddMedia({ navigation }) {

    const numColumns = 3;
    const screenWidth = Dimensions.get('window').width - 40;
    const imageWidth = screenWidth / numColumns;

    const [imgs, setImgs] = useState([
        { id: '1', source: require('../assets/imgs/extraImg1.png') },
        { id: '2', source: require('../assets/imgs/extraImg2.png') },
        { id: '3', source: require('../assets/imgs/extraImg3.png') },
        { id: '4', source: require('../assets/imgs/extraImg4.png') },
        { id: '5', source: require('../assets/imgs/extraImg5.png') },
        { id: '6', source: require('../assets/imgs/extraImg6.png') },
        { id: '8', source: require('../assets/imgs/extraImg8.png') },
    ]);

    const removeItem = (id) => {
        const remaining = imgs.filter(e => e?.id !== id);
        console.log(remaining)
        setImgs(remaining)
    }



    const renderItem = ({ item }) => (
        <View style={styles.imageContainer} >
            <ImageBackground
                source={item.source} style={{
                    width: imageWidth - 20,
                    height: imageWidth - 20,
                    borderRadius: 6,
                    marginBottom: 20,
                }} >
                <TouchableOpacity
                    onPress={() => removeItem(item?.id)}
                >
                    <Image
                        source={require('../assets/imgs/crossPrimary.png')}
                        style={styles.crossPrimary}
                    />
                </TouchableOpacity>

            </ImageBackground>

        </View>
    );
    return (
        <View style={[globalStyles.container, { backgroundColor: 'whitei' }]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/imgs/crossBlack.png')}
                    style={styles.crossIcon}
                />
            </TouchableOpacity>
            <Text style={[globalStyles.heading1, { color: '#252525' }]}>Upload Media</Text>
            <Text
                style={styles.subHeading}
            >Add New Picture or Media</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Select from Gallery</Text>
                <Image
                    source={require('../assets/imgs/upload.png')}
                    style={styles.uploadIcon}
                />
            </TouchableOpacity>
            <Text
                style={styles.subHeading}
            >Recent Posts</Text>

            <FlatList
                data={imgs}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    crossIcon: {
        width: 40,
        height: 40,
        marginBottom: 20,
    },
    subHeading: {
        color: acolors.primary,
        fontSize: 11,
        fontFamily: 'Gilroy-Medium',
        marginBottom: 20,
    },
    btn: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
        borderColor: '#D6D6D6',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    btnText: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 13,
        color: '#757575'
    },
    uploadIcon: {
        width: 16,
        height: 16,
    },
    imageContainer: {
        paddingTop: 10,
        flex: 1,
    },
    crossPrimary: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        marginRight: -5,
        marginTop: -5,
    }
})