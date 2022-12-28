import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Cart from './Cart';

const FoodItem = ({ option, img, title, id, price }) => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count => count + 1)
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count => count - 1)
        }
    }

    const navigattion = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={.6}
            style={{ position: 'relative' }}
            onPress={() => navigattion.navigate('Details', { id })}
        >
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: `${img}` }}
                />
                <View style={{ paddingLeft: 20 }}>
                    <Text style={styles.option}>{option}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{'\u00A3'} {price}</Text>
                </View>
                <View></View>
            </View>

            <View style={{ position: 'absolute', top: '40%', right: '5%' }}>
                {
                    count < 1 ?
                        <TouchableOpacity
                            onPress={handleIncrement}
                        >
                            <Text style={styles.cart}>Add</Text>
                        </TouchableOpacity>
                        :

                        <Cart handleDecrement={handleDecrement} handleIncrement={handleIncrement} count={count} />
                }
            </View>
        </TouchableOpacity>

    )
}

export default FoodItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFDD0',
        marginVertical: 5,
        paddingRight: 15,

    },
    img: {
        width: 100,
        height: 100
    },
    option: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    title: {
        textTransform: 'capitalize'
    },
    price: {
        color: 'red'
    },
    count: {
        fontSize: 30,
        paddingHorizontal: 15,
    },
    cart: {
        fontWeight: 'bold'
    }
})