import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


export default props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Icon name='bars'
                size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.textG}>Logo</Text>
            </TouchableOpacity>
            
            <Text style={styles.textG}>Carrinho</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: '1px',
        padding: '20px',
    },
    textG: {
        fontSize: 20
    }
})