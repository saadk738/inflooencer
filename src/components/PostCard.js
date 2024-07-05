import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { acolors } from '../constants/colors';

const PostCard = ({ profileImage, username, postTime, postImage, likes, comments }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View>
                        <Image source={{ uri: profileImage }} style={styles.profileImage} />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.username}>{username}</Text>
                        <Text style={styles.subText}>Suggested for you</Text>
                        {/* <Text style={styles.subText}>{postTime}</Text> */}
                    </View>
                </View>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/imgs/menu.png')}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: postImage }} style={styles.postImage} />
            <View style={styles.footer}>
                <View style={styles.footerIcons}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/imgs/like.png')}
                            style={styles.likeIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/imgs/comment.png')}
                            style={styles.commentIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/imgs/share.png')}
                            style={styles.shareIcon}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.sendTip} >
                    <Image
                        style={styles.sendTipImg}
                        source={require('../assets/imgs/dollar.png')} />
                    <Text style={styles.sendTipText}>Send Tip</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.btmTxt}  >
                <Text style={styles.btmName} >{username} </Text>
                To understand the nature of a text, it's important to break down the various elements that contribute to this understanding. </Text>

            <View style={styles.footer} >
                <View >
                    <Text style={styles.likes}>{likes} likes</Text>
                    <Text style={styles.comments}>View all {comments} comments</Text>
                </View>
                <Text style={styles.postTime} >50 mins ago</Text>
            </View>




        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    menuIcon: {
        width: 5,
        height: 17,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    headerText: {
        marginLeft: 15,
    },
    username: {
        fontSize: 14,
        fontFamily: 'Gilroy-Bold',
        color: acolors.black,
    },
    subText: {
        color: acolors.primary,
        fontSize: 9,
        marginTop: 3,
        fontFamily: 'Gilroy-Regular'
    },
    postTime: {
        color: acolors.grey,
        fontSize: 9,
        fontFamily: 'Gilroy-Regular',
        marginTop: 15,
    },
    postImage: {
        width: '100%',
        height: 210,
        borderRadius: 22,
        marginBottom: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    footerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    likeIcon: {
        width: 19,
        height: 16,
    },
    commentIcon: {
        width: 18,
        height: 14,
    },
    shareIcon: {
        width: 16,
        height: 16,
    },
    sendTip: {
        backgroundColor: acolors.primary,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 2,
        flexDirection: 'row',
        gap: 5,
    },
    sendTipImg: {
        width: 10,
        height: 10,
    },
    sendTipText: {
        color: 'white',
        fontFamily: 'Gilroy-Regular',
        fontSize: 9,
    },
    likes: {
        color: acolors.primary,
        fontSize: 11,
        fontFamily: 'Gilroy-Regular',
        marginTop: 3
    },
    comments: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 11,
        color: acolors.grey,
        marginVertical: 4,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btmTxt: {
        fontSize: 11,
        fontFamily: "Gilroy-Regular",
        marginTop: 8,
    },
    btmName: {
        fontSize: 11,
        fontFamily: 'Gilroy-Bold',
        paddingRight: 5,
    }
});

export default PostCard;
