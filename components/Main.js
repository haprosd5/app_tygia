import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
// import cac thanh phan
import Home from './Home';
import Interest from './Interest';
import Gold from './Gold';
import Adstory from './Adstory';
import Monye from './Monye';
const Main = createStackNavigator({
    Home: {
        screen: Home
    },
    Monye: {
        screen: Monye
    },
    Gold: {
        screen: Gold
    },
    Adstory: {
        screen: Adstory
    },
    Interest: {
        screen: Interest
    }
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null
    }
})
export default Main;