import React from 'react'

import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Cart = ({ handleDecrement, handleIncrement, count }) => {
    return (
        <View style={styles.cart}>
            <TouchableOpacity
                onPress={handleDecrement}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 30, paddingHorizontal: 15 }}>-</Text>
            </TouchableOpacity>

            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{count}</Text>

            <TouchableOpacity
                onPress={handleIncrement}
            >
                <Text style={styles.count}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({

    count: {
        fontSize: 25,
        paddingHorizontal: 15,
    },
    cart: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '-10%'
    }
})