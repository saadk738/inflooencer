import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { acolors } from '../constants/colors';
import PostCard from '../components/PostCard';

const users = [
    { id: '1', name: 'Your Story', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX1ID3qi0xYJ249oZ6pxHjeX2jiLdSu2bXQ&s", live: false },
    { id: '2', name: 'Alex Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&s", live: true },
    { id: '3', name: 'Deni Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s", live: false },
    { id: '4', name: 'Ricky Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s", live: false },
    { id: '5', name: 'Olive Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX1ID3qi0xYJ249oZ6pxHjeX2jiLdSu2bXQ&s", live: false },
    { id: '6', name: 'Martin Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&s", live: false },
    { id: '7', name: 'John Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX1ID3qi0xYJ249oZ6pxHjeX2jiLdSu2bXQ&s", live: false },
    { id: '8', name: 'Deni Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s", live: false },
    { id: '9', name: 'Ricky Doe', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s", live: false },
];

const posts = [
    {
        id: '1',
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s',
        username: 'Megan Doe',
        postTime: '50 mins ago',
        postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s',
        likes: 2235,
        comments: 70,
        userComment: 'Brandon Gouse',
        userCommentImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s',
        userCommentDate: 'Check In Date: 14 Aug, 2023',
        userCommentTime: '1 hour ago'
    },
    {
        id: '2',
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s',
        username: 'Rose Merry',
        postTime: '50 mins ago',
        postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk2riEgTjqeB0XAJz_6EqyIN9WWZFLcTkaA&s',
        likes: 2235,
        comments: 70,
        userComment: 'Brandon Gouse',
        userCommentImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s',
        userCommentDate: 'Check In Date: 14 Aug, 2023',
        userCommentTime: '1 hour ago'
    },
    {
        id: '3',
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s',
        username: 'Megan Doe',
        postTime: '50 mins ago',
        postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s',
        likes: 2235,
        comments: 70,
        userComment: 'Brandon Gouse',
        userCommentImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s',
        userCommentDate: 'Check In Date: 14 Aug, 2023',
        userCommentTime: '1 hour ago'
    },
    {
        id: '4',
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNoUWoTYqtPDYWB3r5GB28nI1QoL6POkekA&s',
        username: 'Rose Merry',
        postTime: '50 mins ago',
        postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk2riEgTjqeB0XAJz_6EqyIN9WWZFLcTkaA&s',
        likes: 2235,
        comments: 70,
        userComment: 'Brandon Gouse',
        userCommentImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t19r_QBvdPRTO6hqntBjhpdTR73OSp936A&s',
        userCommentDate: 'Check In Date: 14 Aug, 2023',
        userCommentTime: '1 hour ago'
    },
];


export default function Home({ navigation }) {
    let [activeTab, setActiveTab] = useState('Home')
    const tabs = ['Home', 'Reels']

    const renderItem = ({ item }) => (
        <View style={styles.story}>
            <LinearGradient
                colors={item.name == 'Your Story' ? ['white', 'white'] : item.live ? ['red', 'red'] : ['#FFB400', '#000000']}
                style={styles.storyBorder}
            >
                <Image source={{ uri: item.image }} style={item.name == 'Your Story' ? styles.yourImage : styles.storyImage} />
            </LinearGradient>
            {item.live && <Text style={styles.liveText}>Live</Text>}
            {item.name == 'Your Story' && <Text style={styles.plusText}>+</Text>}
            <Text style={styles.storyText}>{item.name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.bgContainer}>

            {/* Header  */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image
                            source={require('../assets/imgs/logoDarkBg.png')}
                            style={styles.img}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.text}>Welcome</Text>
                        <Text style={styles.heading1}>Daniel Cavil</Text>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Image
                            source={require('../assets/imgs/notificationGroup.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => []}>
                        <Image
                            source={require('../assets/imgs/searchGroup.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MessagingSearch')}>
                        <Image
                            source={require('../assets/imgs/boardGroup.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* body  */}
            <ScrollView style={{ flex: 1 }} >
                <FlatList
                    horizontal
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={styles.storiesContainer}
                />
                <View style={styles.homeTabBox} >
                    {tabs.map(e => (
                        <TouchableOpacity
                            key={e}
                            onPress={() => setActiveTab(e)}
                        >
                            <Text style={e === activeTab ? styles.homeTabTextActive : styles.homeTabText}>{e}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ padding: 10 }}>
                    {posts.map(post => (
                        <PostCard
                            key={post.id}
                            profileImage={post.profileImage}
                            username={post.username}
                            postTime={post.postTime}
                            postImage={post.postImage}
                            likes={post.likes}
                            comments={post.comments}
                            userComment={post.userComment}
                            userCommentDate={post.userCommentDate}
                            userCommentImg={post.userCommentImg}
                            userCommentTime={post.userCommentTime}
                        />
                    ))}
                </View>

            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#F7F8FA',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 27,
        height: 27,
        marginRight: 10,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 31,
        height: 31,
    },
    heading1: {
        fontFamily: 'Gilroy-Bold',
        color: '#000',
        fontSize: 21,
        lineHeight: 23,
    },
    text: {
        fontSize: 13,
        fontFamily: 'Gilroy-Regular',
        color: acolors.primary,
    },
    storiesContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginRight: 5,
    },
    story: {
        alignItems: 'center',
        marginRight: 20,
    },
    storyBorder: {
        width: 54,
        height: 54,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',

    },
    storyImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        borderWidth: 4,
    },
    yourImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderWidth: 2,
        borderColor: 'white',
        borderWidth: 4,
    },
    storyText: {
        marginTop: 5,
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        color: '#000',
    },
    liveText: {
        position: 'absolute',
        bottom: 17,
        left: 13,
        backgroundColor: 'red',
        color: 'white',
        paddingHorizontal: 5,
        borderRadius: 3,
        fontSize: 12,
        fontFamily: 'Gilroy-Bold',
    },
    plusText: {
        width: 16,
        height: 16,
        position: 'absolute',
        bottom: 25,
        left: 45,
        backgroundColor: acolors.primary,
        color: 'white',
        paddingHorizontal: 5,
        borderRadius: 20,
        fontSize: 12,
        fontFamily: 'Gilroy-Bold',
    },
    homeTabBox: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 50,
        backgroundColor: 'white',
        paddingTop: 15,
    },
    homeTabTextActive: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 120,
        textAlign: 'center',
        fontFamily: 'Gilroy-Bold',
        color: acolors.black,
        fontSize: 13,
        paddingBottom: 8,
    },
    homeTabText: {
        width: 120,
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
        fontSize: 13,
        color: acolors.black
    }
});
