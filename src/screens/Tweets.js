import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import {Feather, MaterialIcons, FontAwesome, FontAwesome5} from '@expo/vector-icons'

const Tweets = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../images/jay.jpg')} />
                </TouchableOpacity>
                <View style={styles.tweetTextAndUsername}>
                    <View style={styles.nameAndUsername}>
                        <Text style={styles.mainName}>Jordan Lopez</Text>
                        <Text style={styles.userName}>@jordann_lopez</Text>
                        <Text style={styles.userName}>1d</Text>
                    </View>
                    <View>
                        <Text style={styles.tweet}>If you're depressed, Just code, you will feel so good.....❤️🥰</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather style={styles.icon1} size={25} name='more-vertical' color={'#CCCCCC'} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainIconContainer}>
                <View style={styles.iconContainer}>
                    <Feather name='message-circle' size={20} color={'#E0E0E0'}/>
                    <Text style={styles.iconText}>5.1k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='refresh-ccw' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>18k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='heart' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>23.3k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='bar-chart-2' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText}>933.3k</Text>
                </View>
                <View style={[styles.iconContainer, styles.iconShare]}>
                    <Feather name='share-2' size={20} color={'#E0E0E0'} />
                </View>
            </View>
            <View style={styles.container1}>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../images/two.jpg')} />
                </TouchableOpacity>
                <View style={styles.tweetTextAndUsername}>
                    <View style={styles.nameAndUsername}>
                        <Text style={styles.mainName}>Celebrity Programmer</Text>
                        <Text style={styles.userName}>@code</Text>
                        <Text style={styles.userName}>2h</Text>
                    </View>
                    <View>
                        <Text style={styles.tweet}>Pretty Queen.❤️🫶🏽🇬🇲</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather style={styles.icon1} size={25} name='more-vertical' color={'#CCCCCC'} />
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.tweetImage} source={require('../images/aji.jpg')} />
            </View>
            <View style={styles.mainIconContainer}>
                <View style={styles.iconContainer}>
                    <Feather name='message-circle' size={20} color={'#E0E0E0'}/>
                    <Text style={styles.iconText}>500.2k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='refresh-ccw' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>228k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='heart' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>28m</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='bar-chart-2' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText}>950.3k</Text>
                </View>
                <View style={[styles.iconContainer, styles.iconShare]}>
                    <Feather name='share-2' size={20} color={'#E0E0E0'} />
                </View>
            </View>
            <View style={styles.container1}>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../images/money.jpg')} />
                </TouchableOpacity>
                <View style={styles.tweetTextAndUsername}>
                    <View style={styles.nameAndUsername}>
                        <Text style={[styles.mainName, ]}>Money Money</Text>
                        <Text style={styles.userName}>@just_money</Text>
                        <Text style={styles.userName}>30m</Text>
                    </View>
                    <View>
                        <Text style={styles.tweet}>No matter what you do, just make money!!</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather style={styles.icon1} size={25} name='more-vertical' color={'#CCCCCC'} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainIconContainer}>
                <View style={styles.iconContainer}>
                    <Feather name='message-circle' size={20} color={'#E0E0E0'}/>
                    <Text style={styles.iconText}>20.1k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='refresh-ccw' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>15k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='heart' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>33.2k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='bar-chart-2' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText}>923.6k</Text>
                </View>
                <View style={[styles.iconContainer, styles.iconShare]}>
                    <Feather name='share-2' size={20} color={'#E0E0E0'} />
                </View>
            </View>
            <View style={styles.container1}>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../images/352.jpg')} />
                </TouchableOpacity>
                <View style={styles.tweetTextAndUsername}>
                    <View style={styles.nameAndUsername}>
                        <Text style={styles.mainName}>Elon musk boy</Text>
                        <Text style={styles.userName}>@para_dey_body</Text>
                        <Text style={styles.userName}>10m</Text>
                    </View>
                    <View>
                        <Text style={styles.tweet}>When it comes to money, i dey concentrate.</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather style={styles.icon1} size={25} name='more-vertical' color={'#CCCCCC'} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainIconContainer}>
                <View style={styles.iconContainer}>
                    <Feather name='message-circle' size={20} color={'#E0E0E0'}/>
                    <Text style={styles.iconText}>35k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='refresh-ccw' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>23k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='heart' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText2}>104.9k</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='bar-chart-2' size={20} color={'#E0E0E0'} />
                    <Text style={styles.iconText}>1005.6k</Text>
                </View>
                <View style={[styles.iconContainer, styles.iconShare]}>
                    <Feather name='share-2' size={20} color={'#E0E0E0'} />
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: 'black',
    }, 
    container1: {
        width: '100%',
        height: '75%',
        backgroundColor: 'black', 
        flexDirection: 'row', 
        marginTop: 5
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginHorizontal: 10, 
        marginTop: 10
    },
    tweetTextAndUsername: {
        width: '75%',
        height: '100%',
        backgroundColor: 'black',
        marginLeft: 0
    },
    icon1: {
        marginLeft: 2,
        marginTop: 10
    },
    nameAndUsername: {
        width: '100%',
        height: '30%',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainName: {
        maxWidth: '60%',
        fontSize: 17,
        marginRight: 10,
        color: 'white',
    },
    userName: {
        maxWidth: '50%',
        fontSize: 15,
        marginHorizontal: 10,
        color: 'white',
    },
    tweet: {
        fontSize: 20,
        color: 'white',
        maxHeight: '100%'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5
    },
    mainIconContainer: {
        width: '84.5%',
        backgroundColor: 'black', 
        height: '25%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 10
    },
    iconShare: {
        marginRight: 10
    },
    iconText: {
        marginLeft: 3,
        fontSize: 15,
        color: '#E0E0E0'
    }, 
    iconText2: {
        marginLeft: 6,
        fontSize: 15,
        color: '#E0E0E0'
    }, 
    tweetImage: {
        width: '70%', 
        height: 200, 
        alignSelf: 'flex-end', 
        marginRight: 55,
        borderRadius: 15, 
        marginTop: -18
    }
})

export default Tweets;