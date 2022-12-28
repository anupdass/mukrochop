import React from 'react'
import { StyleSheet } from 'react-native'
import Home from '../screens/Home'
import Video from '../screens/Video';
import Social from '../screens/Social';
import Menu from '../screens/Menu';
import ContactUs from '../screens/ContactUs';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
const Stack = createNativeStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Video" component={Video} />
                <Stack.Screen name="Social" component={Social} />
                <Stack.Screen name="Contact" component={ContactUs} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})