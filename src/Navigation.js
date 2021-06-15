import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
//import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Menu from './components/Menu'
import Home from './screens/Home'
import Product from './screens/Product'

const menuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu,
    contentOptions: {
        labelStyles: { 
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
            fontWeight: 'bold'
        }
    }
}

const menuToutes = {
    Home: {
        name: 'Home',
        screen: props => <Home {...props}/>,
        navigatorOptions: {
            title: 'Home'
        }
    },
    Produto: {
        name: 'Produto',
        screen: props => <Product {...props}/>,
        navigatorOptions: {
            title: 'Produto'
        }
    },
}

//const menuNavigator = createDrawerNavigator(menuToutes, menuConfig)
const menuNavigator = createBottomTabNavigator(menuToutes, menuConfig);

const MAINROUTES = {
    Home: {
        name: 'Home',
        screen: menuNavigator
    }
}

const MainNavigator = createSwitchNavigator(MAINROUTES, {
    initialRouteName: 'Home'
})

export default createAppContainer(MainNavigator)
