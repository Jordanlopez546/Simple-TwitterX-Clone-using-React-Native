import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../images/img.jpg')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('../images/twitter.jpeg')} />
            <Text>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 72,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        borderBottomWidth: 1, 
        borderColor: 'grey'
        // flex: 1
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 10
    },
    logo: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 5
    }
})

export default Header;