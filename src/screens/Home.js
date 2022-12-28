import React from 'react'
import { StyleSheet, View } from 'react-native'
import MenuItem from '../components/MenuItem'
import menuData from '../DataFile/menu'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainMenu}>
                {
                    menuData.map(menuData =>
                        <MenuItem
                            key={menuData.id}
                            title={menuData.title}
                            iconName={menuData.iconName}
                            Icon={menuData.icon}
                            navigate={menuData.navigation}
                        />
                    )
                }
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        backgroundColor: '#E2E5DE'
    },
    mainMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    }
})