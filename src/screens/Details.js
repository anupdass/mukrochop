import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import foodData from '../DataFile/foodData'
import { style } from '../Styles/styles'


const Details = ({ route }) => {
    const { id } = route.params;

    const food = foodData.filter(food => food.id === id)

    const { title, img, ingredientTitle, menuingrident, price } = food[0]

    return (
        <View style={style.mainContainer}>
            <Image
                style={styles.img}
                source={{ uri: `${img}` }}
            />
            <View style={{ paddingTop: 10 }}>
                <View style={styles.title}>
                    <Text style={styles.titleFont}>{title}</Text>
                    <Text style={styles.titleFont}>{'\u00A3'} {price}</Text>
                </View>
                <Text style={{ textTransform: 'capitalize', marginTop: 15, fontSize: 24 }}>{ingredientTitle}</Text>
                <View style={{ marginTop: 10 }}>
                    {
                        menuingrident.map((ingredien, index) => <Text key={index + 1} style={{ marginTop: 5 }}>.{ingredien}</Text>)
                    }
                </View>
            </View>

            <TouchableOpacity
                onPress={() => Linking.openURL('tel:0123456789')}
                activeOpacity={.6}
                style={{ marginTop: 20, textAlign: 'center', padding: 15, backgroundColor: '#FFFDD0', borderRadius: 20 }}
            >
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Order Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'cover'
    },
    title: {
        flexDirection: 'row',
    },
    titleFont: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 100
    }
})