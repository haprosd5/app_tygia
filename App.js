/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import {createStore, applyMiddleware} from 'redux';



// improt cac thanh phan
import Main from './components/Main'
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main />
      </View>
    );
  }
}

