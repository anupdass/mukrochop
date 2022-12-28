import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'

import { FontAwesome5 } from 'react-native-vector-icons'

const { height, width } = Dimensions.get('window')
const itemWidth = (width / 2) - 20

const MenuItem = ({ title, navigate, iconName, Icon }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            activeOpacity={.6}
            style={styles.container}
            onPress={() => navigation.navigate(navigate)}
        >
            {/* <Icon /> */}
            <FontAwesome5 name={iconName} size={30} style={styles.icon} />
            {/* <Icon name={iconName} size={30} style={styles.icon} /> */}
            <Text style={styles.fontSize}>{title}</Text>

        </TouchableOpacity>
    )
}

export default MenuItem


const styles = StyleSheet.create({
    container: {
        width: itemWidth,
        height: 200,
        margin: 5,
        backgroundColor: '#FFFDD0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    fontSize: {
        fontSize: 20,

    },
    icon: {
        marginBottom: 10
    }
})